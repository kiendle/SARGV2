type PublicationRowProps = {
  year: string;
  title: string;
  sport?: string;
  methods?: string[];
  summary?: string;
  authors?: string;
  pdfLink?: string;
};

export function PublicationRow({
  year,
  title,
  sport,
  methods,
  summary,
  authors,
  pdfLink
}: PublicationRowProps) {
  return (
    <div className="flex gap-8 pb-8 border-b border-[#002d72]/10 last:border-b-0">
      {/* Year */}
      <div className="flex-shrink-0 w-20">
        <div className="text-[#002d72] font-bold" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '36px', letterSpacing: '-0.02em' }}>
          {year}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Title */}
        <h4 className="text-[#002d72] mb-3" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '20px', lineHeight: 1.3 }}>
          {title}
        </h4>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {sport && (
            <span className="bg-[#002d72] text-white px-2 py-1 text-[10px] uppercase tracking-wider font-semibold">
              {sport}
            </span>
          )}
          {methods && methods.map((method) => (
            <span key={method} className="px-2 py-1 border border-[#002d72]/30 text-[#002d72] text-[10px] uppercase tracking-wider font-medium">
              {method}
            </span>
          ))}
        </div>

        {/* Summary */}
        {summary ? (
          <p className="text-[#5b5b5b] text-sm leading-relaxed font-light mb-3">
            {summary}
          </p>
        ) : (
          <p className="text-[#5b5b5b]/60 text-sm italic mb-3">
            Abstract coming soon
          </p>
        )}

        {/* Authors and PDF */}
        <div className="flex flex-wrap items-center gap-4">
          {authors ? (
            <span className="text-[#5b5b5b] text-xs">
              {authors}
            </span>
          ) : (
            <span className="text-[#5b5b5b]/60 text-xs italic">
              Authors TBD
            </span>
          )}
          {pdfLink ? (
            <a
              href={pdfLink}
              className="text-[#002d72] text-xs uppercase tracking-wider font-semibold hover:text-[#86c8bc] transition-colors"
            >
              PDF →
            </a>
          ) : (
            <span className="text-[#5b5b5b]/60 text-xs italic">
              PDF coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
