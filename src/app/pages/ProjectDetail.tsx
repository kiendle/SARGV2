import { TopBar } from "../components/top-bar";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ProjectHero } from "../components/project-detail/ProjectHero";
import { StatStack } from "../components/project-detail/StatStack";
import { DataMethodCard } from "../components/project-detail/DataMethodCard";
import { FindingRow } from "../components/project-detail/FindingRow";
import { ContributorCard } from "../components/project-detail/ContributorCard";
import { RelatedOutputCard } from "../components/project-detail/RelatedOutputCard";
import { Link } from "react-router";

export default function ProjectDetail() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>
      <TopBar />
      <SiteHeader />

      {/* Project Hero */}
      <ProjectHero
        eyebrow="Hockey / Student Paper / 2024"
        title="How much do faceoffs matter?"
        summary="This project studies how faceoff wins translate into goals, wins, and longer-term team value."
        image="https://images.unsplash.com/photo-1549956847-f77eb7058468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBmYWNlb2ZmJTIwaWNlJTIwcmluayUyMGFjdGlvbnxlbnwxfHx8fDE3Nzc5NzEzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        imageCaption="NHL faceoff at center ice"
        sport="Hockey"
        year="2024"
        methods={["Statistical Modeling", "Event Analysis", "Player Valuation"]}
        output="Student Paper"
      />

      {/* The Question */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
              The question.
            </h2>
            <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-8">
              Faceoffs are one of hockey's most familiar events. Players line up, the puck drops, and one team wins possession. But what does winning a faceoff actually accomplish? Coaches emphasize faceoff specialists. Analysts debate zone-specific value. Fans celebrate clutch faceoff wins in overtime.
            </p>
            <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-10">
              Yet the tactical and financial value of a single faceoff remains unclear. Does winning a faceoff in the offensive zone add meaningful goal probability? How much does faceoff skill contribute to team success over a full season? Can we quantify what teams should pay for elite faceoff performance?
            </p>

            {/* Pull Quote */}
            <div className="border-l-4 border-[#86c8bc] pl-6 py-2">
              <p className="text-[#002d72] text-xl italic" style={{ fontFamily: 'Roboto Slab, serif', lineHeight: 1.4 }}>
                "Small events can become meaningful over a season."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Why it matters.
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Context */}
            <div>
              <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-6">
                Teams make roster decisions based on faceoff performance. A center who wins 55% of faceoffs earns ice time, contract leverage, and roster protection. Coaches design special teams units around faceoff specialists.
              </p>
              <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-6">
                But without knowing how much a faceoff win actually contributes to scoring or winning, these decisions rest on intuition rather than evidence.
              </p>
              <p className="text-[#5b5b5b] text-lg leading-relaxed font-light">
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
        </div>
      </section>

      {/* Data And Methods */}
      <section
        className="relative text-white py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at top right, #1a2238 0%, #000000 70%)',
          fontFamily: 'Work Sans, sans-serif'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10">
          <h2 className="mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Data and methods.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* Findings */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Findings.
          </h2>
          <div className="space-y-12">
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
        </div>
      </section>

      {/* Contributors */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Contributors.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Related Outputs */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Related outputs.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative text-white py-16 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at bottom left, #1a2238 0%, #000000 70%)',
          fontFamily: 'Work Sans, sans-serif'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center relative z-10">
          <h2 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.2 }}>
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

      <SiteFooter />
    </div>
  );
}
