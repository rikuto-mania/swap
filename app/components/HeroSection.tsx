export function HeroSection() {
  return (
    <section className="relative bg-[#1f4529] text-white overflow-hidden">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-[48px] font-bold mb-2">About Us</h2>
      </div>
      {/* Curved bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white" style={{
        borderTopLeftRadius: '50% 100%',
        borderTopRightRadius: '50% 100%',
      }}></div>
    </section>
  );
}
