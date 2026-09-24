import { TopBar } from "../components/top-bar";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { MentorProfile } from "../components/people/MentorProfile";
import { StudentCard } from "../components/people/StudentCard";
import { TeamCard } from "../components/people/TeamCard";
import { AlumniTimelineItem } from "../components/people/AlumniTimelineItem";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const currentStudents = [
  "Adi Iyer",
  "Anika Cheerla",
  "Arjun Sawhney",
  "Brian Schwartz",
  "Diya Nuxoll",
  "Ishaan Sud",
  "Kush Jain",
  "Pranav Eranki",
  "Rohan Kapur",
  "Samarth Ramesh",
  "Tanush Savadi",
  "Varun Pasupuleti"
];

export default function People() {
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
              People
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '52px', lineHeight: 1.1 }}>
              Students, mentors, and collaborators behind the research.
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-light max-w-xl">
              SARG is built around interdisciplinary student teams guided by mentors who help turn sports questions into researchable problems.
            </p>
          </div>

          <div className="relative">
            <div className="border-4 border-[#86c8bc]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjByZXNlYXJjaCUyMHRlYW0lMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3Nzk3NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="SARG student research team collaborating"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
                SARG students collaborating on research
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Mentors
          </h2>

          <div className="space-y-12">
            <MentorProfile
              name="Anton 'Tony' Dahbura"
              title="Executive Director, Johns Hopkins Information Security Institute"
              bio="Tony Dahbura leads the Johns Hopkins Information Security Institute and serves as a mentor for SARG projects that combine analytics with security, autonomy, and decision systems. He guides students in framing sports questions as computational problems, validating models against real-world constraints, and translating technical findings into actionable recommendations for teams and leagues."
              focusAreas={["Computer Science", "Information Security", "Sports Analytics", "Assured Autonomy"]}
            />

            <MentorProfile
              name="John J. Burbridge, Jr."
              title="Senior Lecturer, Johns Hopkins Carey Business School"
              bio="John Burbridge teaches operations, supply chain management, and information systems at the Carey Business School. He mentors SARG students working on scheduling optimization, resource allocation, and baseball analytics projects. His guidance helps students connect theoretical models to practical constraints faced by professional sports organizations, from minimizing travel fatigue to optimizing roster construction under salary caps."
              focusAreas={["Operations", "Supply Chain", "Information Systems", "Baseball Analytics"]}
            />

            <MentorProfile
              name="Tad Berkery"
              title="Mentor"
              bio="Tad Berkery mentors SARG students on sports analytics projects, bringing expertise in data science and statistical modeling to help students develop rigorous approaches to sports research questions."
              focusAreas={["Sports Analytics", "Data Science", "Statistical Modeling"]}
            />
          </div>
        </div>
      </section>

      {/* Current Students */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Current Student Members
          </h2>
          <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-12 max-w-3xl">
            SARG students come from computer science, applied mathematics, data science, statistics, and engineering backgrounds. They work in project teams, translating sports questions into researchable problems and presenting findings through papers, posters, and public-facing articles.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentStudents.map((name) => (
              <StudentCard key={name} name={name} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Teams */}
      <section
        className="relative text-white py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at top right, #1a2238 0%, #000000 70%)',
          fontFamily: 'Work Sans, sans-serif'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10">
          <h2 className="mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Research happens in teams.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <TeamCard
              name="Baseball Prediction Team"
              description="Using machine learning to predict MLB awards, player performance, and game outcomes based on historical stats and advanced metrics."
              methods={["Machine Learning", "Predictive Analytics", "Baseball Analytics"]}
            />
            <TeamCard
              name="Hockey Analytics Team"
              description="Quantifying the tactical and financial value of hockey events like faceoffs, zone entries, and special teams situations."
              methods={["Statistical Modeling", "Event Analysis", "Player Valuation"]}
            />
            <TeamCard
              name="Scheduling Optimization Team"
              description="Developing algorithms to minimize travel distance and fatigue for professional sports leagues while satisfying broadcasting and stadium constraints."
              methods={["Operations Research", "Optimization", "Integer Programming"]}
            />
            <TeamCard
              name="Football Strategy Team"
              description="Evaluating 4th down decisions, two-point conversions, and clock management using win probability frameworks and game theory."
              methods={["Win Probability", "Decision Theory", "Strategy"]}
            />
          </div>
        </div>
      </section>

      {/* Alumni Circle */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Alumni
          </h2>

          <div className="max-w-3xl">
            <AlumniTimelineItem
              name="Eli Katz"
              years="2020-2022"
            />
            <AlumniTimelineItem
              name="Neil Gahart"
              years="2016-2019"
            />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '42px', lineHeight: 1.15 }}>
            Want to join the next project team?
          </h2>
          <p className="text-[#5b5b5b] text-lg leading-relaxed mb-8 font-light max-w-2xl mx-auto">
            We're looking for students with backgrounds in computation, statistics, data science, visualization, writing, and sports research. Whether you arrive with a specific sports question or want to join an existing project team, SARG welcomes interdisciplinary collaborators.
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
    </div>
  );
}
