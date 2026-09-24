import { ImageWithFallback } from "../figma/ImageWithFallback";

type FeaturedProjectProps = {
  heading: string;
  body: string;
  highlight: string;
  highlightLabel: string;
  methods: string[];
  ctaText: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bgColor?: string;
};

export function FeaturedProject({
  heading,
  body,
  highlight,
  highlightLabel,
  methods,
  ctaText,
  image,
  imageAlt,
  reverse = false,
  bgColor = "white"
}: FeaturedProjectProps) {
  return (
    <section className={`py-24 ${bgColor === 'white' ? 'bg-white' : 'bg-[#f2f2f2]'}`} style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative border-4 border-[#86c8bc]">
              <ImageWithFallback
                src={image}
                alt={imageAlt}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="bg-[#002d72] text-white px-4 py-3 text-sm font-light">
                {imageAlt}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="text-[#002d72] mb-6" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '42px', lineHeight: 1.15 }}>
              {heading}
            </h2>
            <p className="text-[#5b5b5b] text-lg leading-relaxed mb-8 font-light">
              {body}
            </p>

            {/* Highlight Metric */}
            <div className="mb-8 border-l-4 border-[#86c8bc] pl-6">
              <div className="text-[#002d72] font-bold" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '48px', letterSpacing: '-0.02em' }}>
                {highlight}
              </div>
              <div className="text-[#5b5b5b] uppercase tracking-wider text-sm font-medium">
                {highlightLabel}
              </div>
            </div>

            {/* Method Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {methods.map((method) => (
                <span key={method} className="px-4 py-2 border-2 border-[#002d72] text-[#002d72] text-xs uppercase tracking-wider font-semibold">
                  {method}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-block border-2 border-[#86c8bc] text-[#002d72] bg-transparent px-8 py-4 tracking-widest uppercase hover:bg-[#86c8bc] hover:text-[#002d72] transition-colors"
              style={{ fontSize: '13px', fontWeight: 600 }}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
