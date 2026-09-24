import { ImageWithFallback } from "./figma/ImageWithFallback";

const items = [
  { kicker: "Creating insight through", title: "Student Research", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" },
  { kicker: "Transforming questions with", title: "Data Science", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { kicker: "Making impact across", title: "Sports Strategy", img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80" },
];

export function Pillars() {
  return (
    <section className="bg-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 pb-20 grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <a key={it.title} href="#" className="group relative block aspect-[3/4] overflow-hidden border-t-[3px] border-[#86c8bc]">
            <ImageWithFallback src={it.img} alt={it.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002d72]/90 via-[#002d72]/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <div className="tracking-widest uppercase opacity-90 mb-1" style={{ fontSize: '13px' }}>{it.kicker}</div>
              <div style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.1 }}>{it.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
