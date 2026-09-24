import { useState } from "react";

type FilterCategory = {
  label: string;
  options: string[];
};

const filterCategories: FilterCategory[] = [
  {
    label: "Sport",
    options: ["All", "Baseball", "Hockey", "Football", "Basketball", "Soccer"]
  },
  {
    label: "Method",
    options: ["Machine Learning", "Optimization", "Statistical Modeling", "Strategy", "Valuation"]
  },
  {
    label: "Output",
    options: ["Paper", "Poster", "News Feature", "Active Project"]
  }
];

export function FilterBar() {
  const [activeSport, setActiveSport] = useState("All");
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [activeOutput, setActiveOutput] = useState<string | null>(null);

  return (
    <section className="bg-white border-y border-[#002d72]/10 py-8" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="space-y-6">
          {/* Sport Filters */}
          <div>
            <h3 className="text-[#002d72] text-xs uppercase tracking-widest font-bold mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Sport
            </h3>
            <div className="flex flex-wrap gap-2">
              {filterCategories[0].options.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveSport(option)}
                  className={`px-4 py-2 border-2 text-xs uppercase tracking-wider font-semibold transition-all ${
                    activeSport === option
                      ? 'bg-[#002d72] text-white border-[#002d72]'
                      : 'bg-transparent text-[#002d72] border-[#002d72]/30 hover:border-[#86c8bc]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Method Filters */}
          <div>
            <h3 className="text-[#002d72] text-xs uppercase tracking-widest font-bold mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Method
            </h3>
            <div className="flex flex-wrap gap-2">
              {filterCategories[1].options.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveMethod(activeMethod === option ? null : option)}
                  className={`px-4 py-2 border-2 text-xs uppercase tracking-wider font-semibold transition-all ${
                    activeMethod === option
                      ? 'bg-[#002d72] text-white border-[#002d72]'
                      : 'bg-transparent text-[#002d72] border-[#002d72]/30 hover:border-[#86c8bc]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Output Filters */}
          <div>
            <h3 className="text-[#002d72] text-xs uppercase tracking-widest font-bold mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Output
            </h3>
            <div className="flex flex-wrap gap-2">
              {filterCategories[2].options.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveOutput(activeOutput === option ? null : option)}
                  className={`px-4 py-2 border-2 text-xs uppercase tracking-wider font-semibold transition-all ${
                    activeOutput === option
                      ? 'bg-[#002d72] text-white border-[#002d72]'
                      : 'bg-transparent text-[#002d72] border-[#002d72]/30 hover:border-[#86c8bc]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
