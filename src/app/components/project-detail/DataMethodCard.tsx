type DataMethodCardProps = {
  title: string;
  description: string;
  tags?: string[];
};

export function DataMethodCard({ title, description, tags }: DataMethodCardProps) {
  return (
    <div className="border-l-4 border-[#86c8bc] pl-6 py-4">
      <h3 className="text-white mb-3" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '20px', lineHeight: 1.25 }}>
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed font-light text-sm mb-4">
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 border border-white/30 text-white/90 text-[10px] uppercase tracking-wider font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
