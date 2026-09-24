type PublicationCardProps = {
  title: string;
  year: string;
  sport: string;
  output: string;
  summary: string;
  pdfLink?: string;
  projectLink?: string;
};

export function PublicationCard({
  title,
  year,
  sport,
  output,
  summary,
  pdfLink,
  projectLink
}: PublicationCardProps) {
  return (
    <div className="bg-white border-t-4 border-[#86c8bc] p-8">
      {/* Top badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-[#86c8bc]/20 text-[#002d72] px-2 py-1 text-[10px] uppercase tracking-wider font-bold">
          {output}
        </span>
        <span className="bg-[#002d72] text-white px-2 py-1 text-[10px] uppercase tracking-wider font-semibold">
          {sport}
        </span>
        <span className="text-[#5b5b5b] text-xs font-medium">
          {year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[#002d72] mb-4" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '24px', lineHeight: 1.3 }}>
        {title}
      </h3>

      {/* Summary */}
      <p className="text-[#5b5b5b] leading-relaxed font-light mb-6 text-sm">
        {summary}
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        {pdfLink ? (
          <a
            href={pdfLink}
            className="text-[#002d72] text-xs uppercase tracking-wider font-semibold hover:text-[#86c8bc] transition-colors"
          >
            View PDF →
          </a>
        ) : (
          <span className="text-[#5b5b5b]/60 text-xs italic">
            PDF coming soon
          </span>
        )}
        {projectLink && (
          <a
            href={projectLink}
            className="text-[#002d72] text-xs uppercase tracking-wider font-semibold hover:text-[#86c8bc] transition-colors"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}
