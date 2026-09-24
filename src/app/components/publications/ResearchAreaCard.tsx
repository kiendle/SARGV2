import { Link } from "react-router";

type ResearchAreaCardProps = {
  sport: string;
  description: string;
  projectCount?: number;
};

export function ResearchAreaCard({ sport, description, projectCount }: ResearchAreaCardProps) {
  return (
    <Link
      to="/projects"
      className="block border-l-4 border-[#86c8bc] pl-6 py-4 group hover:bg-white/5 transition-colors"
    >
      <h3 className="text-white mb-2 group-hover:text-[#86c8bc] transition-colors" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '22px', lineHeight: 1.25 }}>
        {sport}
      </h3>
      <p className="text-white/80 leading-relaxed font-light text-sm mb-2">
        {description}
      </p>
      {projectCount !== undefined && (
        <div className="text-[#86c8bc] text-xs uppercase tracking-wider font-semibold">
          {projectCount} {projectCount === 1 ? 'Project' : 'Projects'} →
        </div>
      )}
    </Link>
  );
}
