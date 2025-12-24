const teamMembers = [
  {
    name: "NGUYEN RIKU",
    nameJP: "グエン リク",
    image: "/IMG_7726 (1) 1.png"
  },
  {
    name: "NGUYEN RIKU",
    nameJP: "グエン リク",
    image: "/IMG_7726 (1) 1.png"
  },
  {
    name: "NGUYEN RIKU",
    nameJP: "グエン リク",
    image: "/IMG_7726 (1) 1.png"
  }
];

export function TeamSection() {
  return (
    <section className="relative py-32 bg-[#1f4529] text-white overflow-hidden">
      {/* Curved top border */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white" style={{
        borderBottomLeftRadius: '50% 100%',
        borderBottomRightRadius: '50% 100%',
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold mb-4">Meet Our Team</h2>
          <p className="text-white/90 text-[18px]">
            Dedicated students and volunteers driving change in our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-6">
                <img
                  alt={member.name}
                  className="size-[300px] rounded-full object-cover"
                  src={member.image}
                />
              </div>
              <h3 className="text-[24px] font-bold mb-1">{member.name}</h3>
              <p className="text-[14px] text-white/80">{member.nameJP}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
