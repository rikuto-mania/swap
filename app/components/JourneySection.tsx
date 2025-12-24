import svgPaths from "../imports/svg-v4pkmf2hdi";

interface JourneyItem {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const journeyItems: JourneyItem[] = [
  {
    date: "SEPTEMBER 2024",
    title: "The Idea Sparks",
    description: "SWAP was born during a high school environmental science class discussion about Japan's plastic waste challenge. Founder Annabelle Siddons recognized the need for student-led action targeting supermarket packaging.",
    icon: "p1572e00"
  },
  {
    date: "NOVEMBER 2024",
    title: "First Research Visit",
    description: "Conducted initial supermarket research, documenting packaging practices and interviewing managers. The findings revealed the complexity of the plastic packaging issue and inspired our evidence-based approach.",
    icon: "p2c0a1600"
  },
  {
    date: "JANUARY 2025",
    title: "Official Launch & Partnerships",
    description: "SWAP officially launched with a team of dedicated volunteers. Established partnerships with ECC Volunteer Center and began systematic research across 6+ supermarket locations.",
    icon: "p1867a000"
  },
  {
    date: "MARCH 2025",
    title: "Toyonaka City Hall Partnership",
    description: "Secured official partnership with Toyonaka City Hall's Environmental Department, gaining governmental support and resources to expand our community impact and policy advocacy efforts.",
    icon: "p228eed00"
  },
  {
    date: "ONGOING",
    title: "Growing Movement",
    description: "Today, SWAP continues to grow with 75+ active volunteers, expanding research, advocacy campaigns, and community education programs. Our movement is gaining momentum across Osaka and beyond.",
    icon: "p10a7d100"
  }
];

export function JourneySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-[#18181b] mb-4">Our Journey</h2>
          <p className="text-[#3f3f46] text-[18px]">
            From a school project to a community movement - here's how SWAP evolved
          </p>
        </div>

        <div className="max-w-[900px] mx-auto relative">
          {/* Gradient line */}
          <div 
            className="absolute left-1/2 top-12 bottom-0 w-1 -translate-x-1/2 rounded-sm"
            style={{
              background: 'linear-gradient(to bottom, #b8e6b8, #4e8989)'
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12 pt-6">
            {journeyItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Icon badge */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-white rounded-full size-12 flex items-center justify-center border-4 border-[#b8e6b8] z-10">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths[item.icon as keyof typeof svgPaths]} fill="#B8E6B8" />
                  </svg>
                </div>

                {/* Content card */}
                <div className="bg-[#f5efe0] rounded-[20px] p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] mt-6">
                  <div className="text-[#b8e6b8] text-[14px] font-bold mb-4">{item.date}</div>
                  <h3 className="text-[#18181b] text-[24px] font-bold mb-4">{item.title}</h3>
                  <p className="text-[#3f3f46] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
