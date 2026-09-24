import { ImageWithFallback } from "./figma/ImageWithFallback";

const news = [
  {
    img: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc3OTcwNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Student Research", "Baseball"],
    title: "Johns Hopkins Students Use AI to Predict Baseball's MVPs",
    excerpt: "By training machine learning models on decades of player statistics, a student group is identifying the hidden metrics that truly drive award voting.",
  },
  {
    img: "https://images.unsplash.com/photo-1749571767862-a5a9587d3f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBob2NrZXklMjBhbmFseXRpY3MlMjBjb2FjaHxlbnwxfHx8fDE3Nzc5NzA2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Feature", "Hockey"],
    title: "This Johns Hopkins student believes AI can bolster hockey analytics",
    excerpt: "From faceoff valuations to spatial tracking on the ice, discover how computer vision is unlocking new strategic possibilities in the NHL.",
  },
  {
    img: "https://images.unsplash.com/photo-1610731364280-cda6aadfeaf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBkYXRhJTIwY2hhcnQlMjBudW1iZXJzfGVufDF8fHx8MTc3Nzk3MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Data Science", "Industry"],
    title: "Numbers Game",
    excerpt: "SARG faculty and students are partnering with professional franchises to integrate real-time tracking data into actionable coaching insights.",
  },
];

export function News() {
  return (
    <section className="bg-[#f5f5f5]" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-20">
        <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-[#5a5c5a]/30">
          <div className="flex items-center gap-4">
            <span className="text-[#002d72]" style={{ fontSize: '36px' }}>—</span>
            <h2 className="text-[#002d72]" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.1 }}>
              Latest SARG News
            </h2>
          </div>
          <a href="#" className="tracking-widest uppercase text-[#002d72] border-b-2 border-[#86c8bc] pb-1 hover:text-[#86c8bc]" style={{ fontSize: '13px', fontWeight: 600 }}>
            View All News
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {news.map((n) => (
            <article key={n.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-5 border-t-[4px] border-[#86c8bc]">
                <ImageWithFallback src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex gap-3 mb-3 tracking-[0.15em] uppercase text-[#5a5c5a]" style={{ fontSize: '12px', fontWeight: 600 }}>
                {n.tags.map((t, i) => (
                  <span key={t}>
                    {t}
                    {i < n.tags.length - 1 && <span className="mx-2 text-[#86c8bc]">|</span>}
                  </span>
                ))}
              </div>
              <h3 className="text-[#002d72] mb-3 group-hover:text-[#86c8bc] transition-colors" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '22px', lineHeight: 1.3 }}>
                {n.title}
              </h3>
              <p className="text-[#5b5b5b] leading-relaxed font-light" style={{ fontSize: '15px' }}>
                {n.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
