import { TopBar } from "../components/top-bar";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ProcessStep } from "../components/get-involved/ProcessStep";
import { SkillCard } from "../components/get-involved/SkillCard";
import { ContributionCard } from "../components/get-involved/ContributionCard";
import { ChecklistItem } from "../components/get-involved/ChecklistItem";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function GetInvolved() {
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
              Get Involved
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '52px', lineHeight: 1.1 }}>
              Bring a sports question to the lab.
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-light max-w-xl mb-8">
              SARG welcomes Johns Hopkins students from any division who want to apply technical skills to sports research.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#how-to-join"
                className="inline-block border-2 border-[#86c8bc] text-white bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors"
                style={{ fontSize: '13px', fontWeight: 600 }}
              >
                How to Join
              </a>
              <a
                href="#contact"
                className="inline-block border-2 border-white text-white bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-white hover:text-[#002d72] transition-colors"
                style={{ fontSize: '13px', fontWeight: 600 }}
              >
                Contact SARG
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="border-4 border-[#86c8bc]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtpbmclMjB0b2dldGhlciUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29yayUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzc3OTc1MDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students collaborating on research"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
                SARG students working together on a project
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section id="how-to-join" className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Heading */}
            <div>
              <h2 className="text-[#002d72]" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
                Who can join SARG?
              </h2>
            </div>

            {/* Right: Body */}
            <div>
              <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-6">
                SARG is open to Johns Hopkins students from any division—Krieger, Engineering, Business, Public Health, or others—who want to apply technical skills to sports research.
              </p>
              <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-6">
                Students typically join SARG through independent study credit, working with faculty mentors to frame a sports question as a researchable problem. Some students arrive with a specific question in mind; others join an existing project team.
              </p>

              {/* Highlight Note */}
              <div className="border-l-4 border-[#86c8bc] pl-6 py-4 bg-[#86c8bc]/5">
                <p className="text-[#002d72] font-semibold leading-relaxed">
                  Independent study credit is usually required.
                </p>
                <p className="text-[#5b5b5b] text-sm font-light mt-2">
                  Talk with your academic adviser to confirm eligibility and credit requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Projects Start */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-16 text-center" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            How projects start
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            <ProcessStep
              number={1}
              title="Ask a sports question"
              description="Start with a question coaches, analysts, or fans actually ask."
            />
            <ProcessStep
              number={2}
              title="Join or form a team"
              description="Work with mentors and teammates to define the research approach."
            />
            <ProcessStep
              number={3}
              title="Gather and model the data"
              description="Collect data, build models, and test your approach."
            />
            <ProcessStep
              number={4}
              title="Test and communicate the result"
              description="Validate findings and prepare presentations or visualizations."
            />
            <ProcessStep
              number={5}
              title="Publish/poster/pitch"
              description="Share your work through papers, posters, or public-facing articles."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Skills That Help */}
      <section
        className="relative text-white py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at top right, #1a2238 0%, #000000 70%)',
          fontFamily: 'Work Sans, sans-serif'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10">
          <h2 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Skills that help
          </h2>
          <p className="text-white/80 text-lg font-light mb-12 max-w-3xl">
            You don't need every skill listed below—SARG projects are collaborative. Students contribute based on their strengths and learn new methods as they go.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Applied Mathematics and Statistics"
              description="Probability, regression, time series, Bayesian analysis, and statistical inference for modeling sports performance."
            />
            <SkillCard
              title="Computer Science and Programming"
              description="Python, R, SQL, data structures, algorithms, and computational problem-solving for data collection and analysis."
            />
            <SkillCard
              title="Data Science and Machine Learning"
              description="Supervised and unsupervised learning, predictive modeling, and pattern recognition in sports data."
            />
            <SkillCard
              title="Web Development and Visualization"
              description="Interactive dashboards, spatial heatmaps, and data visualizations that communicate insights to non-technical audiences."
            />
            <SkillCard
              title="Sports Knowledge"
              description="Understanding game rules, strategies, and contexts helps frame better research questions and interpret findings."
            />
            <SkillCard
              title="Research Writing and Communication"
              description="Translating technical findings into papers, posters, presentations, and public-facing articles."
            />
          </div>
        </div>
      </section>

      {/* Ways To Contribute */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Ways to contribute
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ContributionCard
              title="Start a project"
              description="Arrive with a sports question you can't stop thinking about. Work with mentors to frame it as a researchable problem and build a project from scratch."
            />
            <ContributionCard
              title="Join a team"
              description="Join an active project team working on baseball analytics, hockey valuation, scheduling optimization, or football strategy."
            />
            <ContributionCard
              title="Build the research product"
              description="Help design visualizations, write papers, create posters, or build interactive dashboards that communicate findings to stakeholders."
            />
          </div>
        </div>
      </section>

      {/* Before You Contact */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Before you contact SARG
          </h2>

          <div className="max-w-3xl space-y-6">
            <ChecklistItem text="Identify a sport or sports question that interests you. It doesn't need to be fully formed—just a starting point." />
            <ChecklistItem text="Note any relevant skills or classes you've taken (statistics, programming, data science, visualization, writing)." />
            <ChecklistItem text="Talk with your academic adviser to confirm independent study credit eligibility and requirements." />
            <ChecklistItem text="Prepare a short message explaining your interest, background, and what you'd like to work on." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="border-4 border-[#86c8bc]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMHdvcmtpbmclMjB0b2dldGhlciUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29yayUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzc3OTc1MDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="SARG team collaboration"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '42px', lineHeight: 1.15 }}>
                Ready to learn more?
              </h2>
              <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-8">
                Reach out to SARG with your sports question, background, and what you'd like to explore. We'll help you figure out if SARG is a good fit and what the next steps might be.
              </p>
              <a
                href="#"
                className="inline-block border-2 border-[#86c8bc] text-[#002d72] bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors"
                style={{ fontSize: '13px', fontWeight: 600 }}
              >
                Contact SARG
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
