type StoryTypeCardProps = {
  title: string;
  description: string;
};

export function StoryTypeCard({ title, description }: StoryTypeCardProps) {
  return (
    <div className="border-l-4 border-[#86c8bc] pl-6 py-4">
      <h3 className="text-[#002d72] mb-2" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '20px', lineHeight: 1.25 }}>
        {title}
      </h3>
      <p className="text-[#5b5b5b] leading-relaxed font-light text-sm">
        {description}
      </p>
    </div>
  );
}
