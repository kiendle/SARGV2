type SkillCardProps = {
  title: string;
  description: string;
};

export function SkillCard({ title, description }: SkillCardProps) {
  return (
    <div className="border-l-4 border-[#86c8bc] pl-6 py-4">
      <h3 className="text-white mb-2" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '18px', lineHeight: 1.25 }}>
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed font-light text-sm">
        {description}
      </p>
    </div>
  );
}
