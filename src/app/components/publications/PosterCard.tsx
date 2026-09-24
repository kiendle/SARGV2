type PosterCardProps = {
  title: string;
  year: string;
  sport?: string;
  thumbnailUrl?: string;
};

export function PosterCard({ title, year, sport, thumbnailUrl }: PosterCardProps) {
  const initials = title
    .split(' ')
    .filter(word => /^[A-Z]/.test(word))
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);

  return (
    <div className="bg-white border border-[#002d72]/20 hover:border-[#86c8bc] transition-all group">
      {/* Thumbnail or Placeholder */}
      <div className="aspect-[3/4] relative overflow-hidden">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full bg-[#002d72] flex items-center justify-center relative"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          >
            <span className="text-white/30 text-6xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {initials}
            </span>
          </div>
        )}
        {sport && (
          <div className="absolute top-3 left-3 bg-[#86c8bc] text-[#002d72] px-2 py-1 text-[10px] uppercase tracking-wider font-bold">
            {sport}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-[#5b5b5b] text-xs font-medium mb-2">
          {year}
        </div>
        <h4 className="text-[#002d72] text-sm leading-tight" style={{ fontFamily: 'Roboto Slab, serif' }}>
          {title}
        </h4>
      </div>
    </div>
  );
}
