type HelpfulContextCardProps = {
  title: string;
  prompts: string[];
};

export function HelpfulContextCard({ title, prompts }: HelpfulContextCardProps) {
  return (
    <div className="border-l-4 border-[#86c8bc] pl-6 py-4">
      <h3 className="text-white mb-3" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '18px', lineHeight: 1.25 }}>
        {title}
      </h3>
      <ul className="space-y-2">
        {prompts.map((prompt) => (
          <li key={prompt} className="text-white/80 text-sm font-light flex items-start gap-2">
            <span className="text-[#86c8bc] mt-1">•</span>
            <span>{prompt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
