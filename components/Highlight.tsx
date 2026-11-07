// Renders "**text**" segments in the accent colour so key results stand out when skimming.
export function Highlight({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="text-accent font-medium">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

// Result-first bullet list shared by Experience and Projects.
export function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-text-secondary text-base lg:text-lg leading-relaxed font-light">
          <span className="mt-[0.75em] h-0.5 w-4 shrink-0 bg-accent" aria-hidden="true" />
          <span>
            <Highlight text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}
