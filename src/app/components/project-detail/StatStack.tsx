type Stat = {
  value: string;
  label: string;
  note?: string;
};

type StatStackProps = {
  stats: Stat[];
};

export function StatStack({ stats }: StatStackProps) {
  return (
    <div className="space-y-6">
      {stats.map((stat) => (
        <div key={stat.label} className="border-l-4 border-[#86c8bc] pl-6">
          <div className="text-[#002d72] font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '36px', letterSpacing: '-0.02em' }}>
            {stat.value}
          </div>
          <div className="text-[#5b5b5b] text-sm font-medium mb-1">
            {stat.label}
          </div>
          {stat.note && (
            <div className="text-[#5b5b5b]/70 text-xs italic">
              {stat.note}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
