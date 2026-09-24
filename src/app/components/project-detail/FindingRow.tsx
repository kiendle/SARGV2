type FindingRowProps = {
  category: string;
  title: string;
  description: string;
  note?: string;
};

export function FindingRow({ category, title, description, note }: FindingRowProps) {
  return (
    <div className="border-b border-[#002d72]/10 pb-8 last:border-b-0">
      <div className="tracking-[0.15em] uppercase text-[#86c8bc] mb-2 font-bold" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '11px' }}>
        {category}
      </div>
      <h3 className="text-[#002d72] mb-3" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '24px', lineHeight: 1.25 }}>
        {title}
      </h3>
      <p className="text-[#5b5b5b] leading-relaxed font-light mb-2">
        {description}
      </p>
      {note && (
        <p className="text-[#5b5b5b]/70 text-xs italic">
          Note: {note}
        </p>
      )}
    </div>
  );
}
