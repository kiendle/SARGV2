type AlumniTimelineItemProps = {
  name: string;
  years: string;
  project?: string;
  currentRole?: string;
};

export function AlumniTimelineItem({ name, years, project, currentRole }: AlumniTimelineItemProps) {
  return (
    <div className="flex gap-6 pb-8 border-b border-[#002d72]/10 last:border-b-0">
      {/* Timeline Marker */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-4 h-4 bg-[#86c8bc] border-2 border-[#002d72]" />
        <div className="w-px h-full bg-[#002d72]/20 mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-4">
        <div className="flex items-baseline gap-3 mb-2">
          <h4 className="text-[#002d72]" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '20px', lineHeight: 1.3 }}>
            {name}
          </h4>
          <span className="text-[#5b5b5b] text-sm font-medium">
            {years}
          </span>
        </div>

        {project && (
          <div className="text-[#5b5b5b] text-sm mb-2">
            <span className="font-semibold">Project:</span> {project}
          </div>
        )}

        {currentRole && (
          <div className="text-[#5b5b5b] text-sm">
            <span className="font-semibold">Current:</span> {currentRole}
          </div>
        )}

        {!project && !currentRole && (
          <div className="text-[#5b5b5b]/60 text-sm italic">
            Details coming soon
          </div>
        )}
      </div>
    </div>
  );
}
