type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
};

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Number Circle */}
      <div className="relative z-10 w-16 h-16 bg-[#002d72] border-4 border-[#86c8bc] rounded-full flex items-center justify-center mb-4">
        <span className="text-white font-bold text-xl" style={{ fontFamily: 'Oswald, sans-serif' }}>
          {number}
        </span>
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className="absolute top-8 left-1/2 w-full h-1 bg-[#86c8bc] -z-0" style={{ transform: 'translateX(50%)' }} />
      )}

      {/* Content */}
      <div className="max-w-[200px]">
        <h4 className="text-[#002d72] mb-2 font-semibold" style={{ fontSize: '14px' }}>
          {title}
        </h4>
        <p className="text-[#5b5b5b] text-xs font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
