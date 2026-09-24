import { Link } from "react-router";
import { TopBar } from "../components/top-bar";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { FeaturedStory } from "../components/news/FeaturedStory";
import { NewsCard } from "../components/news/NewsCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function News() {
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
              News
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '52px', lineHeight: 1.1 }}>
              Stories from SARG research.
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-light max-w-xl">
              Read about student projects, press coverage, research milestones, and the sports analytics questions SARG students are exploring.
            </p>
          </div>

          <div className="relative">
            <div className="border-4 border-[#86c8bc]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774451606966-4ab827d85f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxuZXdzcGFwZXIlMjBuZXdzJTIwYXJ0aWNsZSUyMGpvdXJuYWxpc20lMjBwcmVzc3xlbnwxfHx8fDE3Nzc5NzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="News headlines and articles"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
                SARG research in the news
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="bg-white py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FeaturedStory
            title="Johns Hopkins Students Use AI to Predict Baseball's MVPs"
            date="Nov 15, 2023"
            category="Baseball"
            tags={["AI"]}
            excerpt="SARG students built a machine learning model that analyzes historical player statistics, advanced metrics, and voting patterns to predict the Most Valuable Player award. The model places the eventual MVP in the top five 90% of the time, revealing which stats voters value most—and which accomplishments go overlooked."
            relatedProject="MLB MVP Prediction"
            relatedProjectSlug="mlb-mvp-prediction"
          />
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-[#f2f2f2] py-24" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <h2 className="text-[#002d72] mb-12" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            — Latest News
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="This Johns Hopkins student believes AI can bolster hockey analytics"
              date="Jan 8, 2023"
              category="Hockey"
              excerpt="A SARG student is using event-level analysis to quantify the tactical and financial value of NHL faceoffs, translating small events into season-long impacts on team success."
              imageUrl="https://images.unsplash.com/photo-1623039405147-547794f92e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBuZXdzJTIwYXJ0aWNsZSUyMGpvdXJuYWxpc20lMjBwcmVzc3xlbnwxfHx8fDE3Nzc5NzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <NewsCard
              title="Numbers Game"
              date="Apr 27, 2022"
              category="Research"
              excerpt="How SARG students are using operations research, machine learning, and statistical modeling to rethink sports strategy and player valuation."
              imageUrl="https://images.unsplash.com/photo-1703381132774-caeab4f6a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxuZXdzcGFwZXIlMjBuZXdzJTIwYXJ0aWNsZSUyMGpvdXJuYWxpc20lMjBwcmVzc3xlbnwxfHx8fDE3Nzc5NzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <NewsCard
              title="Computer Scientist Anton Dahbura Goes By a Different Name: Tony Baseball"
              date="Jun 22, 2019"
              category="Profile"
              excerpt="Meet the faculty mentor who helps SARG students turn sports questions into computational problems and translate technical findings into actionable recommendations."
              imageUrl="https://images.unsplash.com/photo-1635868355594-a297d37b3494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxuZXdzcGFwZXIlMjBuZXdzJTIwYXJ0aWNsZSUyMGpvdXJuYWxpc20lMjBwcmVzc3xlbnwxfHx8fDE3Nzc5NzQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
        </div>
      </section>

      {/* Related Research CTA */}
      <section
        className="relative text-white py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at top right, #1a2238 0%, #000000 70%)',
          fontFamily: 'Work Sans, sans-serif'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center relative z-10">
          <h2 className="mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '38px', lineHeight: 1.25 }}>
            News is only the surface. Explore the projects behind the stories.
          </h2>
          <Link
            to="/projects"
            className="inline-block border-2 border-[#86c8bc] text-white bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors"
            style={{ fontSize: '13px', fontWeight: 600 }}
          >
            View Projects
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
