type TeamCardProps = {
  name: string;
  description: string;
  methods: string[];
  memberPlaceholder?: string;
};

export function TeamCard({ name, description, methods, memberPlaceholder = "Team members TBD" }: TeamCardProps) {
  return (
    <div className="border-l-4 border-[#86c8bc] pl-6 py-4">
      <h3 className="text-white mb-3" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '22px', lineHeight: 1.25 }}>
        {name}
      </h3>
      <p className="text-white/80 leading-relaxed font-light text-sm mb-4">
        {description}
      </p>

      {/* Method Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {methods.map((method) => (
          <span key={method} className="px-2 py-1 border border-white/30 text-white/90 text-[10px] uppercase tracking-wider font-medium">
            {method}
          </span>
        ))}
      </div>

      {/* Member Placeholder */}
      <div className="text-white/60 text-xs italic">
        {memberPlaceholder}
      </div>
    </div>
  );
}
