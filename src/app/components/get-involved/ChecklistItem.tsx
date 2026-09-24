import { Check } from "lucide-react";

type ChecklistItemProps = {
  text: string;
};

export function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <div className="flex gap-4 items-start pb-6 border-b border-[#002d72]/10 last:border-b-0 last:pb-0">
      <div className="flex-shrink-0 w-6 h-6 bg-[#86c8bc] flex items-center justify-center mt-1">
        <Check size={16} className="text-[#002d72]" strokeWidth={3} />
      </div>
      <p className="text-[#5b5b5b] leading-relaxed font-light flex-1">
        {text}
      </p>
    </div>
  );
}
