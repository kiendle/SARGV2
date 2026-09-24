import { TopBar } from "../components/top-bar";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { PublicationCard } from "../components/publications/PublicationCard";
import { PublicationRow } from "../components/publications/PublicationRow";
import { PosterCard } from "../components/publications/PosterCard";
import { ResearchAreaCard } from "../components/publications/ResearchAreaCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const posterTitles = [
  { title: "MLB MVP Prediction", year: "2023", sport: "Baseball" },
  { title: "Hockey Faceoff Value Analysis", year: "2024", sport: "Hockey" },
  { title: "Baseball Scheduling Optimization", year: "2023", sport: "Baseball" },
  { title: "NFL Fourth Down Decision Making", year: "2023", sport: "Football" },
  { title: "NBA Game Outcome Prediction", year: "2024", sport: "Basketball" },
  { title: "Soccer Player Valuation Model", year: "2024", sport: "Soccer" },
  { title: "Baseball Lineup Optimization", year: "2023", sport: "Baseball" },
  { title: "Punt Block Strategy Analysis", year: "2024", sport: "Football" }
];

export default function Publications() {
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
              Publications
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '52px', lineHeight: 1.1 }}>
              Student research, papers, and posters.
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-light max-w-xl">
              SARG publications and posters represent student research across sports, methods, and levels of technical depth.
            </p>
          </div>

          <div className="relative">
            <div className="border-4 border-[#86c8bc]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZXNlYXJjaCUyMHBhcGVyJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzc3OTc0Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Data visualization and research outputs"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
                Student research outputs and data visualizations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Featured Publications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PublicationCard
              title="How Much Do Faceoffs Matter? Translating Faceoffs to Goals, Wins, and Championships in Hockey"
              year="2024"
              sport="Hockey"
              output="Student Paper"
              summary="By analyzing over 5.2 million NHL faceoffs, this paper quantifies the tactical and financial value of winning a faceoff across different game states and zones, translating event-level value into season-long impacts on team success."
              projectLink="/projects/hockey-faceoff-value"
            />
            <PublicationCard
              title="MLB MVP Prediction: A Computational Approach to Predicting a Subjective Award"
              year="2023"
              sport="Baseball"
              output="Student Paper"
              summary="Using machine learning models trained on historical performance metrics and voting patterns, this paper demonstrates that algorithmic approaches can place the eventual MVP in the top five 90%+ of the time."
              projectLink="/projects/mlb-mvp-prediction"
            />
            <PublicationCard
              title="End Of Game Strategy-NFL Football"
              year="2023"
              sport="Football"
              output="Student Paper"
              summary="Evaluating 4th down decisions, two-point conversions, and clock management using win probability added (WPA) frameworks to determine when coaches should be more aggressive in critical game situations."
              projectLink="/projects/nfl-end-of-game-strategy"
            />
          </div>
        </div>
      </section>

      {/* Student Papers */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Student Papers
          </h2>

          <div className="space-y-8">
            <PublicationRow
              year="2024"
              title="Hockey Faceoff Value: Translating Event-Level Performance to Season-Long Impact"
              sport="Hockey"
              methods={["Statistical Modeling", "Event Analysis"]}
              summary="This paper analyzes 5.2M+ NHL faceoffs to determine how faceoff wins translate into expected goals, win probability, and player valuation across different zones and game states."
            />
            <PublicationRow
              year="2024"
              title="Baseball Scheduling Optimization: Minimizing Travel and Fatigue"
              sport="Baseball"
              methods={["Operations Research", "Optimization"]}
              summary="Developing algorithms to minimize MLB team travel distance and fatigue across a 162-game season while satisfying broadcasting and stadium constraints."
            />
            <PublicationRow
              year="2023"
              title="MLB MVP Prediction Using Machine Learning"
              sport="Baseball"
              methods={["Machine Learning", "Award Prediction"]}
              summary="A computational approach to predicting the Most Valuable Player award based on historical performance metrics, advanced stats, and voting patterns."
            />
            <PublicationRow
              year="2023"
              title="NFL End-of-Game Strategy and Decision Analysis"
              sport="Football"
              methods={["Win Probability", "Decision Theory"]}
              summary="Evaluating fourth down, clock management, and two-point conversion decisions using win probability added frameworks."
            />
            <PublicationRow
              year="2024"
              title="Soccer Player Valuation Through Spatial Analytics"
              sport="Soccer"
              methods={["Spatial Analytics", "Valuation"]}
            />
            <PublicationRow
              year="2023"
              title="NBA Game Prediction Using Historical Performance Data"
              sport="Basketball"
              methods={["Machine Learning", "Predictive Analytics"]}
            />
          </div>
        </div>
      </section>

      {/* Student Project Posters */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Student Project Posters
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posterTitles.map((poster) => (
              <PosterCard
                key={poster.title}
                title={poster.title}
                year={poster.year}
                sport={poster.sport}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '42px', lineHeight: 1.15 }}>
            Have a comment about a paper?
          </h2>
          <p className="text-[#5b5b5b] text-lg leading-relaxed mb-8 font-light max-w-2xl mx-auto">
            Questions, feedback, or suggestions about SARG research? We'd love to hear from you. Whether you're interested in methodology, want to discuss findings, or have ideas for future research directions, reach out.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-[#86c8bc] text-[#002d72] bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors"
            style={{ fontSize: '13px', fontWeight: 600 }}
          >
            Message Us
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
