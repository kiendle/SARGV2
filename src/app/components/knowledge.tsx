import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  {
    number: "10+",
    label: "Years of SARG",
    body: "A decade of student-led inquiry, building a community where curiosity about sport meets rigorous quantitative research.",
    cta: "Our Story",
  },
  {
    number: "100+",
    label: "Projects Completed to Date",
    body: "From pitch-by-pitch baseball models to hockey expected-goals studies, our members have shipped a hundred original analyses.",
    cta: "Browse the Project Archive",
  },
  {
    number: "300+",
    label: "Members in Alumni Circle",
    body: "Former SARG members now work across pro front offices, sports media, academia, and industry — and they stay connected.",
    cta: "Meet the Alumni Circle",
  },
];

export function Knowledge() {
  return (
    <section
      className="bg-white pb-20"
      style={{ fontFamily: "Work Sans, sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-2 gap-14 items-start">
        <div className="border-t-[4px] border-[#86c8bc]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1554187505-bf7114ee173c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Baseball stadium"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>

        <div>
          <h2
            className="text-[#002d72] mb-12"
            style={{
              fontFamily: "Roboto Slab, serif",
              fontSize: "40px",
              lineHeight: 1.15,
            }}
          >
            Here, students don't just study the game.
            <br />
            They model it.
          </h2>

          <div className="space-y-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-t border-[#5a5c5a]/30 pt-6 grid grid-cols-[auto,1fr] gap-6"
              >
                <div
                  className="text-[#002d72]"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "56px",
                    lineHeight: 1,
                    fontWeight: 500,
                  }}
                >
                  {s.number}
                </div>
                <div>
                  <div
                    className="text-[#002d72] mb-3"
                    style={{
                      fontFamily: "Roboto Slab, serif",
                      fontSize: "22px",
                    }}
                  >
                    {s.label}
                  </div>
                  <p
                    className="text-[#5b5b5b] leading-relaxed mb-3"
                    style={{ fontSize: "14px" }}
                  >
                    {s.body}
                  </p>
                  <div className="flex flex-col gap-1">
                    {[s.cta]
                      .filter(Boolean)
                      .map((c) => (
                        <a
                          key={c}
                          href="#"
                          className="tracking-widest uppercase text-[#002d72] hover:text-[#86c8bc]"
                          style={{ fontSize: "12px" }}
                        >
                          {c} ›
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
