import { ImageWithFallback } from "../figma/ImageWithFallback";

type NewsCardProps = {
  title: string;
  date: string;
  category?: string;
  excerpt?: string;
  imageUrl?: string;
  storyLink?: string;
};

export function NewsCard({
  title,
  date,
  category,
  excerpt,
  imageUrl,
  storyLink = "#"
}: NewsCardProps) {
  return (
    <a href={storyLink} className="block bg-white border border-[#002d72]/10 hover:border-[#86c8bc] transition-all group">
      {/* Image */}
      {imageUrl && (
        <div className="relative aspect-[16/10] overflow-hidden border-t-4 border-[#86c8bc]">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[#5b5b5b] text-xs uppercase tracking-wider font-semibold">
            {date}
          </span>
          {category && (
            <>
              <span className="text-[#5b5b5b]">/</span>
              <span className="text-[#5b5b5b] text-xs uppercase tracking-wider">
                {category}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h4 className="text-[#002d72] mb-3 group-hover:text-[#86c8bc] transition-colors" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '20px', lineHeight: 1.3 }}>
          {title}
        </h4>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-[#5b5b5b] text-sm leading-relaxed font-light mb-4">
            {excerpt}
          </p>
        )}

        {/* Read More */}
        <span className="text-[#002d72] text-xs uppercase tracking-wider font-semibold group-hover:text-[#86c8bc] transition-colors">
          Read More →
        </span>
      </div>
    </a>
  );
}
