import { TopBar } from "../components/top-bar";
import { SiteHeader } from "../components/site-header";
import { Hero } from "../components/hero";
import { Pillars } from "../components/pillars";
import { Knowledge } from "../components/knowledge";
import { FeaturedResearch } from "../components/featured-research";
import { Experience as DarkProjects } from "../components/experience";
import { News } from "../components/news";
import { JoinCta } from "../components/join-cta";
import { SiteFooter } from "../components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 300 }}>
      <TopBar />
      <SiteHeader />
      <Hero />
      <Pillars />
      <Knowledge />
      <FeaturedResearch />
      <DarkProjects />
      <News />
      <JoinCta />
      <SiteFooter />
    </div>
  );
}
