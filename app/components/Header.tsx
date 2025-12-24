import svgPaths from "../imports/svg-v4pkmf2hdi";
import Image from "next/image";

export function Header() {
  const navItems = [
    { label: 'Home', active: false },
    { label: 'About Us', active: false },
    { label: 'Progress', active: false },
    { label: 'Action', active: true },
    { label: 'Goals', active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#e8ecd7] border-b border-[rgba(230,225,223,0.2)]">
      <div className="container mx-auto px-6 h-[84px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative size-[50px]">
            <Image 
              alt="SWAP Logo" 
              className="size-full object-cover" 
              src="/apple-icon.png"
              width={50}
              height={50}
            />
          </div>
          <h1 className="text-[#4e8989] text-[32px] font-semibold" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
            SWAP
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`text-[12px] transition-colors hover:text-[#1f4529] ${
                item.active ? 'text-[#1f4529]' : 'text-[#3f3f46]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Button */}
        <button className="flex items-center gap-2 bg-[#a7c7e7] rounded-[12px] px-4 h-[36px] hover:bg-[#95b5d5] transition-colors">
          <svg className="size-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p23548000} fill="#18181B" />
          </svg>
          <span className="text-[#18181b] text-[13.3px] font-semibold">日本語</span>
        </button>
      </div>
    </header>
  );
}