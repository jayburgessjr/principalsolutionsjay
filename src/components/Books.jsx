import { useReveal } from "../hooks/useReveal";

const BOOKS = [
  {
    cover: "/book-agentic-engineering.jpg",
    title: "Agentic Engineering",
    subtitle: "Building Autonomous AI Systems That Actually Work",
    url: "https://www.amazon.com/dp/B0GZHP2FHK",
  },
  {
    cover: "/book-agentic-builder.jpg",
    title: "The Agentic Builder",
    subtitle: "Field Notes on Product Development for Systems Thinkers",
    url: "https://www.amazon.com/dp/B0GZHN7B5C",
  },
  {
    // No cover art yet — falls back to a text placeholder. Add a cover image
    // and a "cover" path here (matching the pattern above) when available.
    cover: null,
    title: "Stories from a Systems Thinker",
    subtitle: "Twenty-Five Parables on Why the Obvious Fix Never Works",
    url: "https://a.co/d/0boq5HCE",
  },
];

export default function Books() {
  const rowRef = useReveal();

  return (
    <section className="books-section" id="books">
      <div className="books-inner">
        <div className="books-header">
          <div className="section-label">Published Work</div>
          <h2 className="books-h2">
            Three Books.
            <br />
            <em>Built From the Field.</em>
          </h2>
          <p className="books-sub">
            Practical frameworks for engineers and operators building autonomous
            AI systems, drawn from real deployments, not demos.
          </p>
        </div>
        <div className="books-row reveal" ref={rowRef}>
          {BOOKS.map((b) => (
            <a
              key={b.url}
              href={b.url}
              className="book-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="book-cover-wrap">
                {b.cover ? (
                  <img
                    src={b.cover}
                    alt={b.title}
                    className="book-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="book-cover-placeholder">{b.title}</div>
                )}
              </div>
              <div className="book-meta">
                <div className="book-title">{b.title}</div>
                <div className="book-subtitle">{b.subtitle}</div>
                <div className="book-cta">View on Amazon →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
