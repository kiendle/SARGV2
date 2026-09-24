import { Link } from "react-router";

type FeaturedStoryProps = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  relatedProject?: string;
  relatedProjectSlug?: string;
  storyLink?: string;
};

export function FeaturedStory({
  title,
  date,
  category,
  tags,
  excerpt,
  relatedProject,
  relatedProjectSlug,
  storyLink = "#"
}: FeaturedStoryProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left: Content */}
      <div>
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[#5b5b5b] text-sm font-medium">
            {date}
          </span>
          <span className="text-[#5b5b5b]">/</span>
          <span className="bg-[#002d72] text-white px-2 py-1 text-[10px] uppercase tracking-wider font-semibold">
            {category}
          </span>
          {tags.map((tag) => (
            <span key={tag} className="text-[#5b5b5b] text-sm">
              / {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '32px', lineHeight: 1.25 }}>
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#5b5b5b] leading-relaxed font-light mb-6 text-lg">
          {excerpt}
        </p>

        {/* Related Project */}
        {relatedProject && relatedProjectSlug && (
          <div className="mb-6">
            <div className="text-[#5b5b5b] text-xs uppercase tracking-wider font-semibold mb-2">
              Related Project
            </div>
            <Link
              to={`/projects/${relatedProjectSlug}`}
              className="inline-block bg-[#86c8bc]/20 text-[#002d72] px-3 py-2 text-sm font-semibold hover:bg-[#86c8bc] transition-colors"
            >
              {relatedProject}
            </Link>
          </div>
        )}

        {/* CTA */}
        <a
          href={storyLink}
          className="inline-block border-2 border-[#86c8bc] text-[#002d72] bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors"
          style={{ fontSize: '13px', fontWeight: 600 }}
        >
          Read Full Story
        </a>
      </div>

      {/* Right: Placeholder or Image */}
      <div className="flex items-center">
        <div className="w-full aspect-[4/3] bg-[#002d72] border-4 border-[#86c8bc] flex items-center justify-center">
          <span className="text-white/30 text-4xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
            FEATURED
          </span>
        </div>
      </div>
    </div>
  );
}
