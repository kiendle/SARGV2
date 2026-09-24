import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(134,200,188,0.3) 30px, rgba(134,200,188,0.3) 31px)', backgroundSize: '100% 100%' }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center relative">
        <div>
          <h1 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: 'clamp(48px, 6vw, 72px)', lineHeight: 1.1, fontWeight: 400 }}>
            Student-driven sports analytics at Johns Hopkins.
          </h1>
          <p className="leading-relaxed mb-8 max-w-[560px] text-white/90" style={{ fontSize: '16px' }}>
            SARG brings together students, mentors, and real sports questions to build models, publish research, and discover what data can reveal about the games we love.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#86c8bc] text-[#002d72] px-8 py-3 tracking-widest uppercase hover:bg-white transition-colors" style={{ fontSize: '13px', fontWeight: 600 }}>
              Explore Projects
            </button>
            <button className="border-2 border-[#86c8bc] text-white px-8 py-3 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors" style={{ fontSize: '13px', fontWeight: 600 }}>
              Get Involved
            </button>
          </div>
        </div>

        <div className="relative border-r-[4px] border-[#86c8bc]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1774832872187-3e35cf8c190a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Baseball game analytics"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-sm p-6">
            <p className="leading-relaxed text-white/95" style={{ fontSize: '14px' }}>
              Inside SARG: Students turn questions from baseball, hockey, football, basketball, and soccer into research projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
