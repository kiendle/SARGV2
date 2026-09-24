import { Link } from "react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { TopBar } from "../components/top-bar";
import { Hero } from "../components/hero";
import { Pillars } from "../components/pillars";
import { Knowledge } from "../components/knowledge";
import { JoinCta } from "../components/join-cta";
import { TeamCard } from "../components/people/TeamCard";
import { ProjectCard } from "../components/projects/ProjectCard";
import { PublicationCard } from "../components/publications/PublicationCard";
import { NewsCard } from "../components/news/NewsCard";
import { FeaturedResearch } from "../components/featured-research";
import { Experience } from "../components/experience";

const TEAL = "#86c8bc";

function Section({ title, description, children, dark, noPadding }: { title: string; description?: string; children: React.ReactNode; dark?: boolean; noPadding?: boolean }) {
  return (
    <section className={`border-2 border-black ${dark ? 'bg-black' : 'bg-[#f8f9fa]'} mb-16 overflow-hidden`}>
      <div className="border-b-2 border-black p-6 bg-white">
        <h2 className="tracking-widest uppercase text-black" style={{ fontSize: '22px', fontWeight: 700 }}>{title}</h2>
        {description && (
          <p className="mt-2 text-black/70" style={{ fontSize: '14px' }}>{description}</p>
        )}
      </div>
      <div className={`${noPadding ? '' : 'p-8'} ${dark ? 'text-white' : 'text-black'}`}>
        {children}
      </div>
    </section>
  );
}

function Swatch({ name, value, textColor = "#000" }: { name: string; value: string; textColor?: string }) {
  return (
    <div className="border-2 border-black">
      <div className="h-24" style={{ backgroundColor: value }} />
      <div className="border-t-2 border-black p-3 bg-white" style={{ color: textColor }}>
        <div className="tracking-wider uppercase" style={{ fontSize: '12px', fontWeight: 600 }}>{name}</div>
        <div className="text-black/70" style={{ fontSize: '12px' }}>{value}</div>
      </div>
    </div>
  );
}

function Spec({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-2 border-black p-4 bg-white">
      <div className="tracking-widest uppercase text-black/60 mb-3" style={{ fontSize: '11px', fontWeight: 600 }}>{label}</div>
      {children}
    </div>
  );
}

export default function Components() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>
      {/* Documentation Header */}
      <div className="border-b-2 border-black bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-12">
          <div className="inline-block border-2 border-black px-4 py-1 mb-6" style={{ backgroundColor: TEAL }}>
            <span className="tracking-widest uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Theme Documentation</span>
          </div>
          <h1 className="tracking-tight uppercase mb-4" style={{ fontSize: '48px', fontWeight: 800, lineHeight: 1 }}>
            SARG Component Library
          </h1>
          <p className="max-w-2xl text-black/70" style={{ fontSize: '16px' }}>
            This library catalogs the actual components constructing the Sports Analytics Research Group (SARG) website. 
            Built with strict boxy geometry, sharp corners, 2px borders, and our signature teal accent. 
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/" className="inline-block border-2 border-black bg-black text-white px-6 py-3 tracking-wider uppercase hover:bg-transparent hover:text-black transition-colors" style={{ fontSize: '13px', fontWeight: 600 }}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-12">
        
        {/* Navigation Block */}
        <Section title="01 — Navigation & Header" description="Top bar announcements and the main site navigation wrapper." noPadding>
          <div className="border-b-2 border-black">
            <TopBar />
          </div>
          <div className="relative">
            {/* We position the header relative so we don't break the layout but show it exactly as it renders */}
            <SiteHeader />
          </div>
        </Section>

        {/* Hero Block */}
        <Section title="02 — Hero Section" description="The primary landing page hero component." noPadding>
          <Hero />
        </Section>

        {/* Featured Research */}
        <Section title="03 — Featured Research Panel" description="Text-heavy split panel with geometric background motifs." noPadding>
          <FeaturedResearch />
        </Section>

        {/* Experience Section */}
        <Section title="04 — Research Projects Masonry (Experience)" description="Dark mode alternating masonry grid for projects." noPadding dark>
          <Experience />
        </Section>

        {/* Content Pillars */}
        <Section title="05 — Core Pillars" description="The 3-up pillars pattern used to communicate main research themes." noPadding dark>
          <Pillars />
        </Section>

        {/* Knowledge & Stats */}
        <Section title="06 — Statistics & Knowledge" description="Feature block highlighting major statistical achievements." noPadding>
          <Knowledge />
        </Section>

        {/* Cards Grid */}
        <Section title="07 — Data Entities & Cards" description="Complex modular cards for Teams, Projects, Publications, and News.">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Team Card Demo */}
            <div>
              <h3 className="tracking-widest uppercase mb-4 text-black/50" style={{ fontSize: '12px', fontWeight: 600 }}>Team Card Component</h3>
              <div className="bg-[#1a2238] p-6 border-2 border-black">
                <TeamCard 
                  name="Baseball Prediction Team"
                  description="Using machine learning to predict MLB awards, player performance, and game outcomes based on historical stats and advanced metrics."
                  methods={["Machine Learning", "Predictive Analytics", "Baseball Analytics"]}
                />
              </div>
            </div>

            {/* Project Card Demo */}
            <div>
              <h3 className="tracking-widest uppercase mb-4 text-black/50" style={{ fontSize: '12px', fontWeight: 600 }}>Project Card Component</h3>
              <div className="p-6 border-2 border-black bg-white">
                <ProjectCard 
                  image="https://images.unsplash.com/photo-1508344928928-7165b67de128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  sport="Hockey"
                  methods={["Statistical Modeling", "Event Analysis"]}
                  title="Evaluating Zone Entries"
                  question="How do different methods of zone entry impact expected goals in the NHL?"
                  output="Paper"
                  year="2025"
                  slug="hockey-zone-entries"
                />
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Publication Card Demo */}
            <div>
              <h3 className="tracking-widest uppercase mb-4 text-black/50" style={{ fontSize: '12px', fontWeight: 600 }}>Publication Card Component</h3>
              <div className="p-6 border-2 border-black bg-white h-full">
                <PublicationCard 
                  title="Optimizing Fourth Down Decisions in NCAA Football"
                  year="2024"
                  sport="Football"
                  output="Journal Article"
                  summary="A comprehensive expected points framework analyzing over 10,000 play-by-play situations to model the true risk-reward of 4th down attempts."
                  pdfLink="#"
                />
              </div>
            </div>

            {/* News Card Demo */}
            <div>
              <h3 className="tracking-widest uppercase mb-4 text-black/50" style={{ fontSize: '12px', fontWeight: 600 }}>News Card Component</h3>
              <div className="p-6 border-2 border-black bg-white h-full">
                <NewsCard 
                  title="SARG Team Presents at MIT Sloan Sports Analytics Conference"
                  date="March 15, 2026"
                  category="Conference"
                  excerpt="Three undergraduate researchers shared their latest modeling on basketball substitution patterns with industry leaders in Boston."
                  imageUrl="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                />
              </div>
            </div>

          </div>
        </Section>

        {/* CTA Block */}
        <Section title="08 — Call to Action" description="Universal Join CTA section." noPadding>
          <JoinCta />
        </Section>

        {/* Footer Block */}
        <Section title="09 — Site Footer" description="Global footer with complex links and legal." noPadding>
          <SiteFooter />
        </Section>

        {/* Color palette */}
        <Section title="10 — Color Palette" description="A small, deliberate palette. Teal is the only chromatic move.">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Swatch name="SARG Teal" value="#86c8bc" />
            <Swatch name="Ink Black" value="#1a1a1a" textColor="#000" />
            <Swatch name="Pure Black" value="#000000" />
            <Swatch name="Canvas White" value="#ffffff" />
            <Swatch name="White 30%" value="rgba(255,255,255,0.3)" />
            <Swatch name="White 15%" value="rgba(255,255,255,0.15)" />
            <Swatch name="Black 70%" value="rgba(0,0,0,0.7)" />
            <Swatch name="Black 60%" value="rgba(0,0,0,0.6)" />
          </div>
        </Section>

        {/* Typography */}
        <Section title="11 — Typography" description="One typeface. Several roles.">
          <div className="space-y-4">
            <div className="border-2 border-black p-6 bg-white">
              <div className="tracking-widest uppercase text-black/60 mb-2" style={{ fontSize: '11px', fontWeight: 600 }}>Display / H1</div>
              <div className="uppercase" style={{ fontSize: '48px', fontWeight: 800, lineHeight: 1 }}>Frontier Analytics</div>
              <div className="mt-2 text-black/60" style={{ fontSize: '12px' }}>Work Sans · 48px · weight 800 · uppercase · tight</div>
            </div>
            <div className="border-2 border-black p-6 bg-white">
              <div className="tracking-widest uppercase text-black/60 mb-2" style={{ fontSize: '11px', fontWeight: 600 }}>Section Title / H2</div>
              <div className="tracking-widest uppercase" style={{ fontSize: '22px', fontWeight: 700 }}>Featured Research</div>
              <div className="mt-2 text-black/60" style={{ fontSize: '12px' }}>Work Sans · 22px · weight 700 · uppercase · widest tracking</div>
            </div>
            <div className="border-2 border-black p-6 bg-white">
              <div className="tracking-widest uppercase text-black/60 mb-2" style={{ fontSize: '11px', fontWeight: 600 }}>Eyebrow / Label</div>
              <div className="tracking-widest uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Sports Analytics Research Group</div>
              <div className="mt-2 text-black/60" style={{ fontSize: '12px' }}>Work Sans · 13px · weight 600 · uppercase · widest tracking</div>
            </div>
            <div className="border-2 border-black p-6 bg-white">
              <div className="tracking-widest uppercase text-black/60 mb-2" style={{ fontSize: '11px', fontWeight: 600 }}>Body</div>
              <div style={{ fontSize: '15px', fontWeight: 300 }}>
                The Sports Analytics Research Group advances data-driven inquiry across athletic performance,
                competitive strategy, and institutional research at Johns Hopkins.
              </div>
              <div className="mt-2 text-black/60" style={{ fontSize: '12px' }}>Work Sans · 15px · weight 300 (light)</div>
            </div>
            <div className="border-2 border-black p-6 bg-white">
              <div className="tracking-widest uppercase text-black/60 mb-2" style={{ fontSize: '11px', fontWeight: 600 }}>Nav Link</div>
              <div className="tracking-wide" style={{ fontSize: '14px' }}>Projects</div>
              <div className="mt-2 text-black/60" style={{ fontSize: '12px' }}>Work Sans · 14px · weight 300 · wide tracking</div>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="12 — Buttons" description="All buttons are rectangles with 2px borders. No radii, no shadows.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Spec label="Primary — Black on White">
              <button className="border-2 border-black bg-black text-white px-4 py-2 tracking-wider uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>
                Submit Inquiry
              </button>
            </Spec>
            <Spec label="Secondary — Outline">
              <button className="border-2 border-black bg-white text-black px-4 py-2 tracking-wider uppercase hover:bg-black hover:text-white transition-colors" style={{ fontSize: '13px', fontWeight: 600 }}>
                Read More
              </button>
            </Spec>
            <Spec label="Teal Outline (Header CTA)">
              <button className="px-4 py-2 tracking-wider uppercase border-2 border-[#86c8bc] bg-transparent text-black" style={{ fontSize: '13px' }}>
                Contact SARG
              </button>
            </Spec>
            <Spec label="Teal Filled">
              <button className="px-4 py-2 tracking-wider uppercase border-2 border-[#86c8bc] bg-[#86c8bc] text-black" style={{ fontSize: '13px', fontWeight: 600 }}>
                Get Involved
              </button>
            </Spec>
            <Spec label="On Dark — Inverted Outline">
              <div className="bg-black p-4">
                <button className="border-2 border-white bg-transparent text-white px-4 py-2 tracking-wider uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>
                  Explore Projects
                </button>
              </div>
            </Spec>
            <Spec label="Text Link with Arrow">
              <a href="#" className="tracking-wider uppercase border-b-2 border-black hover:text-[#86c8bc] hover:border-[#86c8bc] transition-colors" style={{ fontSize: '13px', fontWeight: 600 }}>
                View Publication →
              </a>
            </Spec>
          </div>
        </Section>

        {/* Spacing scale */}
        <Section title="13 — Spacing & Grid" description="Consistent rhythm based on a 4px scale; max content width 1280px.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Spec label="Container">Max width 1280px · horizontal padding 24px (lg: 64px)</Spec>
            <Spec label="Section padding">Vertical 48–96px between major sections</Spec>
            <Spec label="Card padding">24–32px interior padding</Spec>
            <Spec label="Element gap">Default gap-4 (16px), gap-6 (24px) for related groups</Spec>
          </div>
        </Section>

        {/* Badges & Tags */}
        <Section title="14 — Badges & Tags" description="Used for categories, statuses, and metadata. Strictly geometric.">
          <div className="flex flex-wrap gap-4">
            <Spec label="Default Badge">
              <span className="inline-block border-2 border-black px-3 py-1 tracking-widest uppercase" style={{ fontSize: '11px', fontWeight: 600 }}>
                Research
              </span>
            </Spec>
            <Spec label="Teal Accent Badge">
              <span className="inline-block border-2 border-black bg-[#86c8bc] px-3 py-1 tracking-widest uppercase" style={{ fontSize: '11px', fontWeight: 600 }}>
                New Publication
              </span>
            </Spec>
            <Spec label="Inverted Badge">
              <span className="inline-block border-2 border-black bg-black text-white px-3 py-1 tracking-widest uppercase" style={{ fontSize: '11px', fontWeight: 600 }}>
                Conference
              </span>
            </Spec>
          </div>
        </Section>

        {/* Form Elements */}
        <Section title="15 — Form Elements" description="Rectangular inputs with thick 2px borders. Sharp focus states.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Spec label="Text Input">
              <div className="flex flex-col gap-2">
                <label className="tracking-widest uppercase text-black" style={{ fontSize: '11px', fontWeight: 600 }}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="border-2 border-black p-3 outline-none focus:border-[#86c8bc] focus:ring-1 focus:ring-[#86c8bc] transition-all bg-transparent rounded-none"
                  style={{ fontSize: '14px' }}
                />
              </div>
            </Spec>
            <Spec label="Select Dropdown">
              <div className="flex flex-col gap-2">
                <label className="tracking-widest uppercase text-black" style={{ fontSize: '11px', fontWeight: 600 }}>Department</label>
                <div className="relative">
                  <select 
                    className="w-full border-2 border-black p-3 outline-none focus:border-[#86c8bc] focus:ring-1 focus:ring-[#86c8bc] transition-all bg-transparent appearance-none rounded-none"
                    style={{ fontSize: '14px' }}
                  >
                    <option>Select an option...</option>
                    <option>Athletics</option>
                    <option>Data Science</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Spec>
          </div>
        </Section>

        {/* Motion & Interaction */}
        <Section title="16 — Interaction & Motion" description="Hover states are fast and stark to match the brutalist aesthetic.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Spec label="Hover Durations">
              <div className="text-black/80" style={{ fontSize: '14px' }}>
                Use <b>150ms</b> to <b>200ms</b> (Tailwind <code className="bg-black/5 px-1">duration-150</code> or <code className="bg-black/5 px-1">duration-200</code>) for color shifts and border changes. No sluggish or soft fading.
              </div>
            </Spec>
            <Spec label="Active States">
              <div className="text-black/80" style={{ fontSize: '14px' }}>
                Elements should visibly depress or snap colors instantly. Rely on solid color swaps (e.g. White → Black, or Black → Teal) rather than box-shadows or scaling.
              </div>
            </Spec>
          </div>
        </Section>

      </div>
    </div>
  );
}