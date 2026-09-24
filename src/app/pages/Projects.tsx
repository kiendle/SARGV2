import { useParams } from "react-router";
import { TopBar } from "../components/top-bar";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { FeaturedProject } from "../components/projects/FeaturedProject";
import { ProjectCard } from "../components/projects/ProjectCard";
import { FilterBar } from "../components/projects/FilterBar";
import { MethodCard } from "../components/projects/MethodCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProjectDetailSidebar } from "../components/projects/ProjectDetailSidebar";

const projectsData = [
  {
    image: "https://images.unsplash.com/photo-1549956847-f77eb7058468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBmYWNlb2ZmJTIwaWNlJTIwcmluayUyMGFjdGlvbnxlbnwxfHx8fDE3Nzc5NzEzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sport: "Hockey",
    methods: ["Statistical Modeling", "Event Analysis", "Player Valuation"],
    title: "Hockey Faceoff Value",
    question: "How much is a faceoff worth?",
    output: "Paper",
    year: "2025",
    slug: "hockey-faceoff-value"
  },
  {
    image: "https://images.unsplash.com/photo-1623947454404-c5efce008360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBsYXllciUyMGJhdHRpbmclMjBzdGFkaXVtfGVufDF8fHx8MTc3Nzk3MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    sport: "Baseball",
    methods: ["Machine Learning", "Award Prediction", "Baseball Analytics"],
    title: "MLB MVP Prediction",
    question: "Can AI predict a subjective award?",
    output: "Paper",
    year: "2025",
    slug: "mlb-mvp-prediction"
  },
  {
    image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBkYXRhJTIwYW5hbHl0aWNzJTIwc3RhZGl1bXxlbnwxfHx8fDE3Nzc5NzEzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sport: "Baseball",
    methods: ["Optimization", "Operations Research"],
    title: "Baseball Scheduling Optimization",
    question: "Can a better schedule reduce strain on teams?",
    output: "Poster",
    year: "2024",
    slug: "baseball-scheduling-optimization"
  },
  {
    image: "https://images.unsplash.com/photo-1762742228046-bd03ab611466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZvb3RiYWxsJTIwZmllbGQlMjBzdHJhdGVneXxlbnwxfHx8fDE3Nzc5NzEzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sport: "Football",
    methods: ["Strategy", "Win Probability", "Decision Theory"],
    title: "NFL End-of-Game Strategy",
    question: "Should coaches be more aggressive on 4th down?",
    output: "News Feature",
    year: "2025",
    slug: "nfl-end-of-game-strategy"
  },
  {
    image: "https://images.unsplash.com/photo-1705594858888-90d164689257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFjdGlvbiUyMGNvdXJ0fGVufDF8fHx8MTc3Nzk3MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    sport: "Basketball",
    methods: ["Machine Learning", "Statistical Modeling"],
    title: "NBA Game Prediction",
    question: "What factors best predict game outcomes?",
    output: "Active Project",
    year: "2026",
    slug: "nba-game-prediction"
  },
  {
    image: "https://images.unsplash.com/photo-1774188222972-e30ca9970601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzb2NjZXIlMjBwbGF5ZXIlMjBraWNraW5nJTIwYmFsbCUyMGZpZWxkfGVufDF8fHx8MTc3Nzk3MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    sport: "Soccer",
    methods: ["Valuation", "Spatial Analytics"],
    title: "Soccer Player Valuation",
    question: "How do we value individual contributions in team sports?",
    output: "Paper",
    year: "2024",
    slug: "soccer-player-valuation"
  },
  {
    image: "https://images.unsplash.com/flagged/photo-1576020269481-b52e281dd4cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiYXNlYmFsbCUyMHBsYXllciUyMGJhdHRpbmclMjBzdGFkaXVtfGVufDF8fHx8MTc3Nzk3MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    sport: "Baseball",
    methods: ["Optimization", "Strategy"],
    title: "Baseball Lineup Optimization",
    question: "What is the optimal batting order?",
    output: "Poster",
    year: "2024",
    slug: "baseball-lineup-optimization"
  },
  {
    image: "https://images.unsplash.com/photo-1759022485063-34ac0655c643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhbWVyaWNhbiUyMGZvb3RiYWxsJTIwZmllbGQlMjBzdHJhdGVneXxlbnwxfHx8fDE3Nzc5NzEzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sport: "Football",
    methods: ["Statistical Modeling", "Strategy"],
    title: "Punt Block Analysis",
    question: "When should teams attempt to block a punt?",
    output: "Active Project",
    year: "2026",
    slug: "punt-block-analysis"
  }
];

const methodsData = [
  {
    title: "Machine Learning",
    description: "Supervised and unsupervised models that predict outcomes, classify plays, and detect patterns in sports performance data."
  },
  {
    title: "Optimization",
    description: "Linear and integer programming to solve scheduling, lineup, and resource allocation problems under complex constraints."
  },
  {
    title: "Simulation",
    description: "Monte Carlo and agent-based models that test strategies, evaluate risk, and explore counterfactual scenarios."
  },
  {
    title: "Statistical Modeling",
    description: "Regression, time series, and Bayesian approaches to measure player contributions, estimate causal effects, and quantify uncertainty."
  },
  {
    title: "Data Visualization",
    description: "Interactive dashboards and spatial heatmaps that communicate insights to coaches, analysts, and fans."
  },
  {
    title: "Decision Analysis",
    description: "Game theory and expected value frameworks for in-game tactical decisions and strategic planning."
  }
];

export default function Projects() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>
      <TopBar />
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative text-white py-32 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at bottom left, #1a2238 0%, #000000 70%)'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="tracking-[0.2em] uppercase text-[#86c8bc] mb-6 font-bold" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px' }}>
              SARG Projects
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '52px', lineHeight: 1.1 }}>
              Projects built from real sports questions.
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-light max-w-xl">
              SARG projects begin with questions coaches, analysts, fans, and researchers actually ask: Who deserves an award? How much does one event change a game? Can a better schedule reduce strain on teams?
            </p>
          </div>

          <div className="relative">
            <div className="border-4 border-[#86c8bc]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544367946-af49aa3a7b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcG9ydHMlMjBkYXRhJTIwYW5hbHl0aWNzJTIwc3RhZGl1bXxlbnwxfHx8fDE3Nzc5NzEzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sports analytics at a stadium"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
                Game data captured at the stadium level
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Hockey Faceoff Value */}
      <FeaturedProject
        heading="How much is a faceoff worth?"
        body="By analyzing over 5.2 million NHL faceoffs across multiple seasons, we quantified the true monetary and tactical value of winning a faceoff across different game states and zones. Our research found that winning a faceoff adds approximately 0.015 expected goals—a metric verified through play-by-play tracking data and peer-reviewed analysis."
        highlight="5.2M+"
        highlightLabel="Plays Analyzed"
        methods={["Statistical Modeling", "Event Analysis", "Player Valuation"]}
        ctaText="Explore the Findings"
        image="https://images.unsplash.com/photo-1549956847-f77eb7058468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBmYWNlb2ZmJTIwaWNlJTIwcmluayUyMGFjdGlvbnxlbnwxfHx8fDE3Nzc5NzEzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Hockey faceoff in action"
        bgColor="white"
      />

      {/* Featured Project: MLB MVP Prediction */}
      <FeaturedProject
        heading="Can AI predict a subjective award?"
        body="Using machine learning models trained on historical performance metrics, advanced stats, and voting patterns, we built a system that places the eventual MVP in the top five 90%+ of the time and correctly identifies the winner in 50% of seasons. The model reveals which stats voters value most—and which accomplishments go overlooked."
        highlight="90%+"
        highlightLabel="Top-Five Placement Accuracy"
        methods={["Machine Learning", "Award Prediction", "Baseball Analytics"]}
        ctaText="Read the Project"
        image="https://images.unsplash.com/photo-1623947454404-c5efce008360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBsYXllciUyMGJhdHRpbmclMjBzdGFkaXVtfGVufDF8fHx8MTc3Nzk3MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
        imageAlt="Baseball player at bat in stadium"
        reverse={true}
        bgColor="gray"
      />

      {/* Filter Bar */}
      <FilterBar />

      {/* Project Grid */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Methods Strip */}
      <section
        className="relative text-white py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at top right, #1a2238 0%, #000000 70%)',
          fontFamily: 'Work Sans, sans-serif'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10">
          <h2 className="mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Methods we use
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodsData.map((method) => (
              <MethodCard key={method.title} {...method} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '42px', lineHeight: 1.15 }}>
            Have a project idea?
          </h2>
          <p className="text-[#5b5b5b] text-lg leading-relaxed mb-8 font-light max-w-2xl mx-auto">
            Some projects come from mentors, some from collaborators, and some from students who arrive with a sports question they cannot stop thinking about.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-[#86c8bc] text-[#002d72] bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors"
            style={{ fontSize: '13px', fontWeight: 600 }}
          >
            Get Involved
          </a>
        </div>
      </section>

      <SiteFooter />

      {/* Project Detail Sidebar */}
      {slug && <ProjectDetailSidebar />}
    </div>
  );
}
