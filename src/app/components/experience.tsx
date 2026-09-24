import { ImageWithFallback } from "./figma/ImageWithFallback";

type Card = {
  img: string;
  title: string;
  body: React.ReactNode;
  methods: string[];
};

const left: Card[] = [
  {
    img: "https://images.unsplash.com/photo-1772651702159-add6e743b80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBsYXllciUyMGhpdHRpbmd8ZW58MXx8fHwxNzc3OTcwNjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "MLB MVP Prediction",
    body: <>Using machine learning to predict Major League Baseball's Most Valuable Player based on historical performance metrics, advanced stats, and voting patterns.</>,
    methods: ["Machine Learning", "Predictive Analytics"],
  },
  {
    img: "https://images.unsplash.com/photo-1659617929571-98383e4baf82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHN0YWRpdW0lMjBlbXB0eXxlbnwxfHx8fDE3Nzc5NzA2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Baseball Scheduling Optimization",
    body: <>Developing algorithms to minimize travel distance and fatigue for MLB teams across a 162-game season while satisfying broadcasting and stadium constraints.</>,
    methods: ["Operations Research", "Optimization"],
  },
  {
    img: "https://images.unsplash.com/photo-1607079715010-f904ea641a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBraWNraW5nfGVufDF8fHx8MTc3Nzk3MDYxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Soccer Player Valuation",
    body: <>Valuing individual player contributions to team success in soccer by analyzing on-ball actions, expected threat (xT), and spatial dominance models.</>,
    methods: ["Spatial Analytics", "Expected Value Models"],
  }
];

const right: Card[] = [
  {
    img: "https://images.unsplash.com/photo-1580670759824-5791e725cdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBmYWNlb2ZmJTIwcHVja3xlbnwxfHx8fDE3Nzc5NzA2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Hockey Faceoff Value",
    body: <>Quantifying the true monetary and tactical value of winning a faceoff in the NHL across different game states and zones.</>,
    methods: ["Statistical Modeling", "Game Theory"],
  },
  {
    img: "https://images.unsplash.com/photo-1757588237650-a03953bde0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZvb3RiYWxsJTIwcmVmZXJlZSUyMGZpZWxkfGVufDF8fHx8MTc3Nzk3MDYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "NFL End-of-Game Strategy",
    body: <>Evaluating 4th down, clock management, and two-point conversion decisions in the NFL using win probability added (WPA) frameworks.</>,
    methods: ["Win Probability", "Decision Theory"],
  },
];

function CardItem({ c }: { c: Card }) {
  return (
    <article className="group">
      <div className="relative aspect-[16/10] overflow-hidden mb-5 border-b-[3px] border-[#86c8bc]">
        <ImageWithFallback src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="border-l-2 border-[#86c8bc] pl-5">
        <h3 className="text-white mb-2" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '24px', lineHeight: 1.25 }}>
          {c.title}
        </h3>
        <p className="text-white/80 leading-relaxed font-light mb-4" style={{ fontSize: '15px' }}>{c.body}</p>
        <div className="flex flex-wrap gap-2">
          {c.methods.map((m) => (
            <span key={m} className="px-3 py-1 bg-white/10 text-white/90 text-xs tracking-wider uppercase border border-white/20 font-medium">
              {m}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section
      className="relative text-white overflow-hidden bg-black"
      style={{
        background: 'radial-gradient(ellipse at top right, #1a2238 0%, #000000 70%)',
        fontFamily: 'Work Sans, sans-serif'
      }}
    >
      {/* Abstract grey pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full border-[3px] border-white/25" />
        <div className="absolute top-[40%] right-[8%] w-[280px] h-[280px] rotate-45 border-[3px] border-white/20" />
        <div className="absolute bottom-[15%] left-[15%] w-[220px] h-[220px] rounded-full border-[3px] border-white/18" />
        <div className="absolute top-[60%] left-[45%] w-[160px] h-[160px] rotate-12 border-[3px] border-white/22" />
        <div className="absolute bottom-[35%] right-[25%] w-[320px] h-[320px] rotate-[30deg] border-[3px] border-white/15" />
        <div className="absolute top-[25%] right-[35%] w-[140px] h-[140px] rounded-full border-2 border-white/20" />
        <div className="absolute top-[5%] left-[40%] w-[100px] h-[100px] border-[3px] border-white/18" />
        <div className="absolute bottom-[10%] right-[10%] w-[180px] h-[180px] rotate-[60deg] border-2 border-white/16" />
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-24 relative z-10">
        <div className="tracking-[0.2em] uppercase text-[#86c8bc] mb-4 font-bold" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px' }}>
          Inside SARG Research
        </div>
        <h2 className="mb-20 max-w-[850px]" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
          Students use analytics, AI, and optimization to rethink how games are studied.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="space-y-16">
            {left.map((c) => <CardItem key={c.title} c={c} />)}
          </div>
          <div className="space-y-16 md:pt-32">
            {right.map((c) => <CardItem key={c.title} c={c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
