-- Distributed rate limiter for the public chat edge function.
create table if not exists public.chat_rate_limits (
  ip text primary key,
  window_start timestamptz not null default now(),
  count integer not null default 0
);

alter table public.chat_rate_limits enable row level security;

create or replace function public.chat_rate_limit(
  p_ip text,
  p_max integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $func$
declare
  v_count integer;
begin
  insert into public.chat_rate_limits as crl (ip, window_start, count)
  values (p_ip, now(), 1)
  on conflict (ip) do update
    set count = case
                  when crl.window_start < now() - make_interval(secs => p_window_seconds)
                  then 1 else crl.count + 1 end,
        window_start = case
                  when crl.window_start < now() - make_interval(secs => p_window_seconds)
                  then now() else crl.window_start end
  returning crl.count into v_count;
  return v_count <= p_max;
end;
$func$;

revoke all on function public.chat_rate_limit(text, integer, integer) from public;
grant execute on function public.chat_rate_limit(text, integer, integer) to service_role;
