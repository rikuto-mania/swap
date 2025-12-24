import svgPaths from "../imports/svg-v4pkmf2hdi";

export function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative size-[40px]">
                <img 
                  alt="SWAP Logo" 
                  className="size-full object-cover" 
                  src="/apple-icon.png" 
                />
              </div>
              <h3 className="text-[#4e8989] text-[24px] font-semibold">SWAP</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Supermarket Waste Action Project - Working towards a plastic-free future through 
              research, advocacy, and community action.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Progress</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Action</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Goals</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm">
                <svg className="size-5" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2c5f2300} fill="currentColor" />
                </svg>
                Instagram
              </a>
              <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm">
                <svg className="size-5" fill="none" viewBox="0 0 36 28">
                  <path d={svgPaths.p3f54de00} fill="currentColor" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 SWAP - Supermarket Waste Action Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
