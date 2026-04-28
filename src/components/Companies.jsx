const companies = ['Walmart', 'Adobe', 'HEAG', 'Harvard', 'LMU', 'Revuity Systems']

export default function Companies() {
  return (
    <div className="companies" id="companies">
      <div className="companies-inner">
        <div className="co-label">Delivered for</div>
        {companies.map((c) => (
          <div className="co-item" key={c}>{c}</div>
        ))}
      </div>
    </div>
  )
}
