import type { Reference } from "@/lib/content";

export function ArticleReferences({ references }: { references: Reference[] }) {
  if (!references || references.length === 0) return null;

  return (
    <section className="article-references" aria-labelledby="references-heading">
      <h2 id="references-heading">References</h2>
      <ol>
        {references.map((ref) => (
          <li key={ref.id} id={`ref-${ref.id}`}>
            {ref.author && <span className="ref-author">{ref.author}. </span>}
            <a href={ref.url} target="_blank" rel="noopener noreferrer">
              {ref.title}
            </a>
            {ref.publisher && <span className="ref-publisher">. {ref.publisher}</span>}
            {ref.date && <span className="ref-date"> ({ref.date})</span>}
            <span className="ref-url">{ref.url}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
