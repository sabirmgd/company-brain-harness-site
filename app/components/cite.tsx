export function Cite({ refId }: { refId: string }) {
  return (
    <sup className="cite">
      <a href={`#ref-${refId}`} aria-label={`Reference ${refId}`}>
        [{refId}]
      </a>
    </sup>
  );
}

export function Callout({
  type = "note",
  children,
}: {
  type?: "note" | "warning" | "insight";
  children: React.ReactNode;
}) {
  return <aside className={`callout callout-${type}`}>{children}</aside>;
}
