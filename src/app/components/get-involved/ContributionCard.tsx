import { ImageWithFallback } from "../figma/ImageWithFallback";

type ContributionCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

export function ContributionCard({ title, description, imageUrl }: ContributionCardProps) {
  return (
    <div className="bg-white border border-[#002d72]/20 overflow-hidden group hover:border-[#86c8bc] transition-all">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden border-t-4 border-[#86c8bc]">
        {imageUrl ? (
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full bg-[#002d72] flex items-center justify-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          >
            <span className="text-white/30 text-4xl font-bold text-center px-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-[#002d72] mb-3" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '20px', lineHeight: 1.25 }}>
          {title}
        </h3>
        <p className="text-[#5b5b5b] text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
