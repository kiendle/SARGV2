type RelatedOutputCardProps = {
  type: string;
  title: string;
  description: string;
  link?: string;
};

export function RelatedOutputCard({ type, title, description, link = "#" }: RelatedOutputCardProps) {
  return (
    <a href={link} className="block bg-white border-2 border-[#002d72]/20 p-6 hover:border-[#86c8bc] transition-all group">
      <div className="bg-[#86c8bc]/20 text-[#002d72] px-2 py-1 text-[10px] uppercase tracking-wider font-bold inline-block mb-3">
        {type}
      </div>
      <h4 className="text-[#002d72] mb-2 group-hover:text-[#86c8bc] transition-colors" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '18px', lineHeight: 1.3 }}>
        {title}
      </h4>
      <p className="text-[#5b5b5b] text-sm font-light leading-relaxed">
        {description}
      </p>
    </a>
  );
}
