type ContributorCardProps = {
  name: string;
  role: string;
  affiliation?: string;
  isPlaceholder?: boolean;
};

export function ContributorCard({ name, role, affiliation, isPlaceholder = false }: ContributorCardProps) {
  return (
    <div className={`bg-white border-2 p-6 ${isPlaceholder ? 'border-[#002d72]/20 opacity-60' : 'border-[#002d72]/30'}`}>
      {isPlaceholder && (
        <div className="text-[#86c8bc] text-[10px] uppercase tracking-wider font-bold mb-2">
          Contributor details to be added
        </div>
      )}
      <h4 className="text-[#002d72] mb-1" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '18px', lineHeight: 1.3 }}>
        {name}
      </h4>
      <div className="text-[#5b5b5b] text-sm font-medium mb-2">
        {role}
      </div>
      {affiliation && (
        <div className="text-[#5b5b5b]/80 text-xs font-light">
          {affiliation}
        </div>
      )}
    </div>
  );
}
