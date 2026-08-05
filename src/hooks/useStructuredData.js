import { useEffect } from "react";

export function useStructuredData(id, data) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
}
