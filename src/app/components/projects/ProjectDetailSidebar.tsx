import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { X } from "lucide-react";
import { ProjectHero } from "../project-detail/ProjectHero";
import { StatStack } from "../project-detail/StatStack";
import { DataMethodCard } from "../project-detail/DataMethodCard";
import { FindingRow } from "../project-detail/FindingRow";
import { ContributorCard } from "../project-detail/ContributorCard";
import { RelatedOutputCard } from "../project-detail/RelatedOutputCard";

export function ProjectDetailSidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll sidebar to top when it opens
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <>
      {/* Backdrop */}
      <Link
        to="/projects"
        className="fixed inset-0 bg-black/60 z-40 animate-fade-in"
        aria-label="Close project detail"
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-full md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white z-50 overflow-y-auto shadow-2xl animate-slide-in"
        style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}
      >
        {/* Close Button */}
        <Link
          to="/projects"
          className="fixed top-6 right-6 z-50 bg-[#002d72] text-white p-3 hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors border-2 border-[#002d72] hover:border-[#86c8bc]"
          aria-label="Close"
        >
          <X size={24} />
        </Link>

        {/* Project Hero */}
        <div className="relative bg-black text-white py-16 px-6 lg:px-12">
          <div className="tracking-[0.2em] uppercase text-[#86c8bc] mb-6 font-bold" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px' }}>
            Hockey / Student Paper / 2024
          </div>
          <h1 className="mb-6 pr-16" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '42px', lineHeight: 1.1 }}>
            How much do faceoffs matter?
          </h1>
          <p className="text-white/90 text-lg leading-relaxed font-light mb-8">
            This project studies how faceoff wins translate into goals, wins, and longer-term team value.
          </p>

          {/* Image */}
          <div className="border-l-4 border-[#86c8bc] mb-8">
            <img
              src="https://images.unsplash.com/photo-1549956847-f77eb7058468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBmYWNlb2ZmJTIwaWNlJTIwcmluayUyMGFjdGlvbnxlbnwxfHx8fDE3Nzc5NzEzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="NHL faceoff at center ice"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
              NHL faceoff at center ice
            </div>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20">
            <div>
              <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Sport</div>
              <div className="text-white font-light">Hockey</div>
            </div>
            <div>
              <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Year</div>
              <div className="text-white font-light">2024</div>
            </div>
            <div>
              <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Methods</div>
              <div className="flex flex-wrap gap-1">
                <span className="text-[#86c8bc] text-xs font-light">Statistical Modeling, Event Analysis, Player Valuation</span>
              </div>
            </div>
            <div>
              <div className="text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Output</div>
              <div className="text-white font-light">Student Paper</div>
            </div>
          </div>
        </div>

        {/* The Question */}
        <section className="bg-white py-16 px-6 lg:px-12">
          <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.25 }}>
            The question.
          </h2>
          <p className="text-[#5b5b5b] text-base leading-relaxed font-light mb-6">
            Faceoffs are one of hockey's most familiar events. Players line up, the puck drops, and one team wins possession. But what does winning a faceoff actually accomplish? Coaches emphasize faceoff specialists. Analysts debate zone-specific value. Fans celebrate clutch faceoff wins in overtime.
          </p>
          <p className="text-[#5b5b5b] text-base leading-relaxed font-light mb-8">
            Yet the tactical and financial value of a single faceoff remains unclear. Does winning a faceoff in the offensive zone add meaningful goal probability? How much does faceoff skill contribute to team success over a full season? Can we quantify what teams should pay for elite faceoff performance?
          </p>

          {/* Pull Quote */}
          <div className="border-l-4 border-[#86c8bc] pl-6 py-2">
            <p className="text-[#002d72] text-lg italic" style={{ fontFamily: 'Roboto Slab, serif', lineHeight: 1.4 }}>
              "Small events can become meaningful over a season."
            </p>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-[#f2f2f2] py-16 px-6 lg:px-12">
          <h2 className="text-[#002d72] mb-8" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.25 }}>
            Why it matters.
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Context */}
            <div>
              <p className="text-[#5b5b5b] text-base leading-relaxed font-light mb-4">
                Teams make roster decisions based on faceoff performance. A center who wins 55% of faceoffs earns ice time, contract leverage, and roster protection. Coaches design special teams units around faceoff specialists.
              </p>
              <p className="text-[#5b5b5b] text-base leading-relaxed font-light mb-4">
                But without knowing how much a faceoff win actually contributes to scoring or winning, these decisions rest on intuition rather than evidence.
              </p>
              <p className="text-[#5b5b5b] text-base leading-relaxed font-light">
                By translating faceoff performance into expected goals, season-level wins, and player valuation, this project gives teams a data-driven framework for lineup construction and contract negotiation.
              </p>
            </div>

            {/* Right: Stat Stack */}
            <div>
              <StatStack
                stats={[
                  {
                    value: "5.2M+",
                    label: "NHL faceoffs analyzed",
                    note: "Play-by-play tracking data across multiple seasons"
                  },
                  {
                    value: "0.015",
                    label: "Expected goals per faceoff win",
                    note: "Verified through peer-reviewed event modeling"
                  },
                  {
                    value: "82",
                    label: "Games in an NHL season",
                    note: "Small per-event value compounds over a full season"
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Data And Methods */}
        <section
          className="relative text-white py-16 px-6 lg:px-12"
          style={{
            background: 'radial-gradient(ellipse at top right, #1a2238 0%, #000000 70%)'
          }}
        >
          <h2 className="mb-8" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.25 }}>
            Data and methods.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <DataMethodCard
              title="Data Collection"
              description="We collected play-by-play tracking data from NHL games spanning multiple seasons, filtering for all recorded faceoff events with complete metadata: zone, game state, players involved, and possession outcomes."
              tags={["NHL API", "Event Tracking", "Play-by-Play"]}
            />
            <DataMethodCard
              title="Event Modeling"
              description="Using logistic regression and expected goals frameworks, we modeled how faceoff wins influence subsequent shot quality, possession duration, and scoring probability within the next 30 seconds."
              tags={["Expected Goals", "Regression", "Event Analysis"]}
            />
            <DataMethodCard
              title="Season-Level Translation"
              description="We aggregated per-event value across a full 82-game season to estimate how faceoff performance contributes to team win probability, goal differential, and playoff positioning."
              tags={["Win Probability", "Simulation", "Aggregation"]}
            />
            <DataMethodCard
              title="Player/Team Interpretation"
              description="Finally, we translated faceoff value into roster strategy: how much should teams pay for faceoff specialists, and when does faceoff skill justify lineup changes or contract premiums?"
              tags={["Player Valuation", "Contract Strategy"]}
            />
          </div>
        </section>

        {/* Findings */}
        <section className="bg-white py-16 px-6 lg:px-12">
          <h2 className="text-[#002d72] mb-8" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.25 }}>
            Findings.
          </h2>
          <div className="space-y-10">
            <FindingRow
              category="Event Value"
              title="Winning a faceoff adds ~0.015 expected goals"
              description="Using event-level analysis across 5.2M+ faceoffs, we found that winning a faceoff increases expected goals by approximately 0.015 compared to losing. This value varies by zone—offensive zone faceoffs carry higher value than defensive zone faceoffs—but the average per-event impact is small yet measurable."
              note="Exact values should be verified against the latest peer-reviewed sources before publication."
            />
            <FindingRow
              category="Season Impact"
              title="Elite faceoff centers add 2–3 wins per season"
              description="A center who wins 5% more faceoffs than league average (e.g., 57% vs. 52%) contributes roughly 2–3 additional wins over an 82-game season. This compounds through power play opportunities, defensive zone clears, and late-game situations where possession matters most."
              note="Win contribution estimates depend on deployment context and line matchups."
            />
            <FindingRow
              category="Roster Strategy"
              title="Faceoff skill justifies targeted contracts, not roster overhaul"
              description="Faceoff performance has measurable value but shouldn't dominate roster construction. Teams benefit from having one or two faceoff specialists for critical situations—power plays, penalty kills, overtime—but shouldn't prioritize faceoff ability over overall offensive or defensive skill in depth roles."
            />
          </div>
        </section>

        {/* Contributors */}
        <section className="bg-[#f2f2f2] py-16 px-6 lg:px-12">
          <h2 className="text-[#002d72] mb-8" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.25 }}>
            Contributors.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ContributorCard
              name="Student Researcher Name"
              role="Graduate Student"
              affiliation="Johns Hopkins University"
              isPlaceholder={true}
            />
            <ContributorCard
              name="Faculty Advisor Name"
              role="Faculty Mentor"
              affiliation="Whiting School of Engineering"
              isPlaceholder={true}
            />
            <ContributorCard
              name="Industry Collaborator Name"
              role="NHL Analytics Partner"
              affiliation="Partner Organization"
              isPlaceholder={true}
            />
          </div>
        </section>

        {/* Related Outputs */}
        <section className="bg-white py-16 px-6 lg:px-12">
          <h2 className="text-[#002d72] mb-8" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.25 }}>
            Related outputs.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RelatedOutputCard
              type="Student Paper"
              title="The Tactical and Financial Value of NHL Faceoffs"
              description="Full research paper with methodology, findings, and recommendations for roster strategy."
            />
            <RelatedOutputCard
              type="Poster"
              title="Faceoff Value: Event-Level Analysis"
              description="Visual summary presented at the SARG Research Symposium 2024."
            />
            <RelatedOutputCard
              type="News Feature"
              title="Why Faceoffs Matter More Than You Think"
              description="Public-facing article explaining the research for coaches, analysts, and fans."
            />
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative text-white py-12 px-6 lg:px-12"
          style={{
            background: 'radial-gradient(ellipse at bottom left, #1a2238 0%, #000000 70%)'
          }}
        >
          <div className="text-center">
            <h2 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '28px', lineHeight: 1.2 }}>
              Explore more SARG projects
            </h2>
            <Link
              to="/projects"
              className="inline-block border-2 border-[#86c8bc] text-white bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors"
              style={{ fontSize: '13px', fontWeight: 600 }}
            >
              Back to Projects
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
