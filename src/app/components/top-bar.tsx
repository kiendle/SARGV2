export function TopBar() {
  return (
    <div className="bg-[#002d72] text-white" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex items-center justify-between" style={{ fontSize: '13px', minHeight: '36px' }}>
        <div className="flex items-center gap-3 tracking-wider uppercase">
          <span>Johns Hopkins</span>
          <span className="opacity-60">|</span>
          <span>Est. 1876</span>
          <span className="opacity-60">|</span>
          <span className="italic" style={{ fontFamily: 'Roboto Slab, serif' }}>JHU</span>
        </div>
        <div className="tracking-wider uppercase hidden md:block">
          America's First Research University
        </div>
      </div>
    </div>
  );
}
