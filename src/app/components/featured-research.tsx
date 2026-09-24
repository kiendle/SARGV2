import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturedResearch() {
  return (
    <section className="bg-[#f2f2f2] py-24 relative overflow-hidden" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-xl">
          <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '42px', lineHeight: 1.15 }}>
            Research that starts with a question from the game.
          </h2>
          <p className="text-[#5b5b5b] text-lg leading-relaxed mb-8 font-light">
            SARG students use analytics, artificial intelligence, and operations research to rethink how games are studied and played. By partnering directly with teams and industry experts, we translate abstract data into actionable strategies that change the game on the field, the court, and the ice.
          </p>
          <a href="#" className="inline-block border-2 border-[#86c8bc] text-[#002d72] bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors" style={{ fontSize: '13px', fontWeight: 600 }}>
            Explore Our Research
          </a>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Circular decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-[#86c8bc]/30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full border border-[#86c8bc]/20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] aspect-square rounded-full border border-[#86c8bc]/10 pointer-events-none" />
          
          {/* Floating card */}
          <div 
            className="relative w-full max-w-[480px] bg-[#fdfdfd] p-12 rounded-none z-10 border border-[#002d72]/20 shadow-[12px_12px_0px_#86c8bc]"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,45,114,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,45,114,0.04) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          >
            <h3 className="mb-6 text-[#002d72]" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '36px', lineHeight: 1.25 }}>
              The power and promise of <span className="text-[#86c8bc]">sports data</span>
            </h3>
            <p className="text-[#5b5b5b] leading-relaxed font-light text-base">
              From predicting peak player performance to optimizing season schedules, we uncover the hidden patterns that define winning strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
