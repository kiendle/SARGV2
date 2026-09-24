import { ImageWithFallback } from "../figma/ImageWithFallback";

type ProjectHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageCaption: string;
  sport: string;
  year: string;
  methods: string[];
  output: string;
};

export function ProjectHero({
  eyebrow,
  title,
  summary,
  image,
  imageCaption,
  sport,
  year,
  methods,
  output
}: ProjectHeroProps) {
  return (
    <section
      className="relative text-white py-20 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at bottom left, #1a2238 0%, #000000 70%)',
        fontFamily: 'Work Sans, sans-serif'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <div className="tracking-[0.2em] uppercase text-[#86c8bc] mb-6 font-bold" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px' }}>
              {eyebrow}
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '48px', lineHeight: 1.1 }}>
              {title}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-light">
              {summary}
            </p>
          </div>

          <div className="relative">
            <div className="border-l-4 border-[#86c8bc]">
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
                {imageCaption}
              </div>
            </div>
          </div>
        </div>

        {/* Metadata Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
          <div>
            <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Sport</div>
            <div className="text-white font-light">{sport}</div>
          </div>
          <div>
            <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Year</div>
            <div className="text-white font-light">{year}</div>
          </div>
          <div>
            <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Methods</div>
            <div className="flex flex-wrap gap-1">
              {methods.map((method) => (
                <span key={method} className="text-[#86c8bc] text-xs font-light">
                  {method}
                  {methods.indexOf(method) < methods.length - 1 && ','}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Output</div>
            <div className="text-white font-light">{output}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
