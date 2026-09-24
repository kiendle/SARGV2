import { ImageWithFallback } from "./figma/ImageWithFallback";

export function JoinCta() {
  return (
    <section className="bg-white" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="border-l-[6px] border-[#86c8bc] shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773949101337-4ae5d3001acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FjaCUyMHRlYW0lMjBzcG9ydHMlMjBzdHJhdGVneXxlbnwxfHx8fDE3Nzc5NzA2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Coach discussing strategy"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        <div>
          <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '46px', lineHeight: 1.15 }}>
            Bring a sports question to the lab.
          </h2>
          <p className="text-[#5b5b5b] text-lg leading-relaxed mb-10 font-light">
            Whether you are a student eager to dive into sports data, a researcher looking to collaborate on statistical modeling, or a professional team seeking actionable insights, SARG welcomes you. Let's work together to redefine the boundaries of sports analytics.
          </p>
          <a href="#" className="inline-block bg-[#002d72] text-white px-10 py-4 tracking-[0.2em] uppercase hover:bg-[#86c8bc] transition-colors shadow-md" style={{ fontSize: '14px', fontWeight: 600 }}>
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
