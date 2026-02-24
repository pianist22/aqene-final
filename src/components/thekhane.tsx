"use client";

const FOUNDERS = [
  {
    name: "MEHUL",
    role: "Co‑Founder",
    image: "/founders/founder1.jpeg",
  },
  {
    name: "SANDEEP ",
    role: "Co‑Founder",
    image: "/founders/founder2.jpeg",
  },
];

export default function TheKhaaneeSection() {
  return (
    <section className="w-full bg-[#f4f4f5] text-[#111827]">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-6 lg:px-10 py-24">
        {/* Big editorial heading */}
        <div className="mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-[#9ca3af]">
           
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-[0.12em] uppercase text-[#2f2a25]">
             The <span className="text-[#c1171a]">क</span>haanee
            <br />
            
            <br />
           
          </h2>
          <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-[#6b7280]">
           
          </p>
        </div>

        {/* 2‑column layout: founders left, story right */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] items-start">
          {/* Left: two founder images side by side */}
          <div className="flex flex-col gap-6 md:flex-row">
            {FOUNDERS.map((founder) => (
              <article key={founder.name} className="flex-1 flex flex-col">
                <div className="overflow-hidden rounded-3xl bg-[#d4d4d8]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition duration-500 ease-out"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold tracking-wide text-[#111827]">
                    {founder.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#6b7280]">
                    {founder.role}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Right: long story text, like the reference page */}
          <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-[#4b5563]">
            <p>
              We didn't begin with ambition. We began with immaturity, naivety, and some 
conviction
            </p>
            <p>
              We made a choice: craft over speed. Integrity over scale. Design indigenization. 
Value addition with profit. That choice became principle. Principle became 
practice. Practice became reputation
            </p>
            <p>
              Today, we partner with India's architectural visionaries on prestige 
commissions—not because we grew large, but because we stayed true.
Every piece we create carries that one original intent: furniture built not to 
impress for a season, but to be patrimonial
            </p>
            <p>
              This isn't a business story.
It's the story of our craft.
And it continues—one commission, one partnership, one heirloom at a time
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[#6b7280]">
              — SANDEEP & MEHUL 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
