export function OurStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-[48px] font-bold text-center text-[#18181b] mb-12">Our Story</h2>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Story Item 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-[#3f3f46] leading-relaxed">
                SWAP (Supermarket Waste Action Project) emerged from a simple observation in a high school environmental science class: 
                Japan's supermarkets generate enormous amounts of plastic packaging waste daily. What started as a student discussion 
                evolved into a structured research project examining packaging practices across major supermarket chains in Osaka.
              </p>
              <p className="text-[#3f3f46] leading-relaxed">
                Our founder, Annabelle Siddons, recognized that while many environmental initiatives exist, few specifically target 
                the packaging decisions made by supermarkets—decisions that directly impact thousands of consumers daily.
              </p>
            </div>
            <div className="bg-gray-200 h-[300px] rounded-lg"></div>
          </div>

          {/* Story Item 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 h-[300px] rounded-lg order-2 md:order-1"></div>
            <div className="space-y-4 order-1 md:order-2">
              <p className="text-[#3f3f46] leading-relaxed">
                Through systematic research and community engagement, SWAP has grown into a movement of students, volunteers, and concerned 
                citizens working together to reduce plastic waste. We combine data-driven research with grassroots advocacy to create 
                meaningful change.
              </p>
              <p className="text-[#3f3f46] leading-relaxed">
                Our approach focuses on collaboration rather than confrontation—partnering with supermarkets, local government, and 
                community organizations to find practical solutions that benefit everyone while protecting our environment.
              </p>
            </div>
          </div>

          {/* Story Item 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-[#3f3f46] leading-relaxed">
                Today, SWAP represents the power of youth-led environmental action. Our research has documented packaging practices 
                across 6+ major supermarket locations, engaged with store managers and city officials, and educated hundreds of 
                community members about sustainable consumption.
              </p>
              <p className="text-[#3f3f46] leading-relaxed">
                We believe that systemic change happens when research meets action, when data informs policy, and when communities 
                come together around a shared vision for a sustainable future.
              </p>
            </div>
            <div className="bg-gray-200 h-[300px] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
