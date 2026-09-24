import { TopBar } from "../components/top-bar";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { InquiryCard } from "../components/contact/InquiryCard";
import { ContactForm } from "../components/contact/ContactForm";
import { HelpfulContextCard } from "../components/contact/HelpfulContextCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contact() {
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
              Contact
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '52px', lineHeight: 1.1 }}>
              Interested in SARG?
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-light max-w-xl">
              Reach out about joining the group, proposing a project, collaborating, or learning more about SARG research.
            </p>
          </div>

          <div className="relative">
            <div className="border-4 border-[#86c8bc]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689799514696-b16af9b53753?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbWFpbCUyMGNvbnRhY3QlMjBjb21tdW5pY2F0aW9uJTIwbWVzc2FnZXxlbnwxfHx8fDE3Nzc5NzUyODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Contact and communication"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
                Get in touch with SARG
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Type Cards */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            How can we help?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <InquiryCard
              title="Students"
              description="Questions about joining SARG, independent study credit, project teams, or applying technical skills to sports research."
            />
            <InquiryCard
              title="Collaborators"
              description="Interested in proposing sports questions, sharing data ideas, or exploring research partnerships with SARG."
            />
            <InquiryCard
              title="Media"
              description="Press inquiries, story ideas, or requests for interviews about SARG research and student projects."
            />
            <InquiryCard
              title="General"
              description="Questions about SARG publications, events, research methods, or how sports analytics work at Johns Hopkins."
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Copy */}
            <div>
              <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
                Send a message.
              </h2>
              <p className="text-[#5b5b5b] text-lg leading-relaxed font-light mb-6">
                Include your background, area of interest, and any sports questions you would like to explore. We'll respond as soon as we can.
              </p>

              {/* Direct Contact */}
              <div className="border-l-4 border-[#86c8bc] pl-6 py-4 bg-[#f2f2f2]">
                <div className="text-[#002d72] text-sm font-semibold mb-2">
                  Direct Contact
                </div>
                <p className="text-[#5b5b5b] text-sm leading-relaxed">
                  Contact Anton Dahbura at{" "}
                  <a
                    href="mailto:AntonDahbura@jhu.edu"
                    className="text-[#002d72] font-semibold hover:text-[#86c8bc] transition-colors"
                  >
                    AntonDahbura@jhu.edu
                  </a>
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Context */}
      <section
        className="relative text-white py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at top right, #1a2238 0%, #000000 70%)',
          fontFamily: 'Work Sans, sans-serif'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10">
          <h2 className="mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            Helpful context to include
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <HelpfulContextCard
              title="Students"
              prompts={[
                "Your year and major",
                "Relevant skills or classes (statistics, programming, data science, etc.)",
                "Sports you're interested in researching",
                "Specific questions or project ideas"
              ]}
            />
            <HelpfulContextCard
              title="Collaborators"
              prompts={[
                "The sports question or problem you want to explore",
                "Sport and league context",
                "Available data or data sources",
                "Timeline or project scope"
              ]}
            />
            <HelpfulContextCard
              title="Media"
              prompts={[
                "Story deadline or publication date",
                "Publication or outlet name",
                "Topic or angle you're covering",
                "Specific SARG projects or people of interest"
              ]}
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
