type StudentCardProps = {
  name: string;
  imageUrl?: string;
  bio?: string;
  project?: string;
};

export function StudentCard({ name, imageUrl, bio, project }: StudentCardProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white border-t-4 border-[#86c8bc] p-6">
      {/* Initials/Image Badge */}
      <div className="mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-20 h-20 object-cover border-2 border-[#002d72]/20"
          />
        ) : (
          <div className="w-20 h-20 bg-[#002d72] flex items-center justify-center">
            <span className="text-white text-xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h4 className="text-[#002d72] mb-1" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '18px', lineHeight: 1.3 }}>
        {name}
      </h4>

      {/* Role */}
      <div className="text-[#5b5b5b] text-xs uppercase tracking-wider font-semibold mb-3">
        Student Member
      </div>

      {/* Bio or Placeholder */}
      {bio ? (
        <p className="text-[#5b5b5b] text-sm leading-relaxed font-light mb-3">
          {bio}
        </p>
      ) : (
        <p className="text-[#5b5b5b]/60 text-sm italic mb-3">
          Bio coming soon
        </p>
      )}

      {/* Project or TBD */}
      {project ? (
        <div className="bg-[#86c8bc]/10 text-[#002d72] px-2 py-1 text-xs font-medium inline-block">
          {project}
        </div>
      ) : (
        <div className="text-[#5b5b5b]/60 text-xs italic">
          Project TBD
        </div>
      )}
    </div>
  );
}
