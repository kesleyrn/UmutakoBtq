export function MapEmbed({ query }: { query: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line">
      <iframe
        title={`Map showing ${query}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="h-80 w-full sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
