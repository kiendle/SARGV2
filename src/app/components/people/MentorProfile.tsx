type MentorProfileProps = {
  name: string;
  title: string;
  bio: string;
  focusAreas: string[];
  imageUrl?: string;
};

export function MentorProfile({ name, title, bio, focusAreas, imageUrl }: MentorProfileProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start pb-12 border-b border-[#002d72]/10 last:border-b-0">
      {/* Image/Initials */}
      <div className="flex-shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full aspect-square object-cover border-4 border-[#86c8bc]"
          />
        ) : (
          <div className="w-full aspect-square bg-[#002d72] border-4 border-[#86c8bc] flex items-center justify-center">
            <span className="text-white text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[#002d72] mb-2" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '28px', lineHeight: 1.25 }}>
          {name}
        </h3>
        <div className="text-[#5b5b5b] text-sm font-semibold uppercase tracking-wider mb-4">
          {title}
        </div>
        <p className="text-[#5b5b5b] leading-relaxed font-light mb-6">
          {bio}
        </p>

        {/* Focus Areas */}
        <div className="mb-2 text-[#002d72] text-xs uppercase tracking-wider font-semibold">
          Focus Areas
        </div>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <span key={area} className="px-3 py-1 border-2 border-[#002d72] text-[#002d72] text-xs uppercase tracking-wider font-semibold">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
