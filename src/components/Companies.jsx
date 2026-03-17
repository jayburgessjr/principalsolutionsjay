const companies = ['Walmart', 'Adobe', 'HEAG', 'Columbia College Hollywood', 'LMU', 'Revuity Systems']

export default function Companies() {
  return (
    <div className="companies">
      <div className="companies-inner">
        <div className="co-label">Delivered for</div>
        {companies.map((c) => (
          <div className="co-item" key={c}>{c}</div>
        ))}
      </div>
    </div>
  )
}
