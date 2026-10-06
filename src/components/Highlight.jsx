// Renders text, giving any *starred* words a yellow highlight.
export default function Highlight({ text }) {
  const parts = text.split(/\*([^*]+)\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="highlight">{part}</mark>
    ) : (
      part
    )
  );
}
