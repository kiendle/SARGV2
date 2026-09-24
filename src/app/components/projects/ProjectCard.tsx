import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";

type ProjectCardProps = {
  image: string;
  sport: string;
  methods: string[];
  title: string;
  question: string;
  output: string;
  year: string;
  slug: string;
  ctaText?: string;
};

export function ProjectCard({
  image,
  sport,
  methods,
  title,
  question,
  output,
  year,
  slug,
  ctaText = "View Project"
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`} className="block">
      <article className="group bg-white border border-[#002d72]/10 hover:border-[#86c8bc] transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-[#86c8bc]">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Sport Tag */}
        <div className="absolute top-4 left-4 bg-[#002d72] text-white px-3 py-1 text-xs uppercase tracking-wider font-semibold">
          {sport}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Method Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {methods.map((method) => (
            <span key={method} className="px-2 py-1 border border-[#002d72]/30 text-[#002d72] text-[10px] uppercase tracking-wider font-medium">
              {method}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-[#002d72] mb-3" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '22px', lineHeight: 1.25 }}>
          {title}
        </h3>

        {/* Question */}
        <p className="text-[#5b5b5b] leading-relaxed font-light mb-4 text-sm italic">
          "{question}"
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#002d72]/10">
          <div className="flex items-center gap-3">
            <span className="bg-[#86c8bc]/20 text-[#002d72] px-2 py-1 text-[10px] uppercase tracking-wider font-bold">
              {output}
            </span>
            <span className="text-[#5b5b5b] text-xs font-medium">
              {year}
            </span>
          </div>
          <span className="text-[#002d72] text-xs uppercase tracking-wider font-semibold group-hover:text-[#86c8bc] transition-colors">
            {ctaText} →
          </span>
        </div>
      </div>
    </article>
    </Link>
  );
}
