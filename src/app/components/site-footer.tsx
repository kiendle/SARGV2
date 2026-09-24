import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className="bg-white border-y border-[#5a5c5a]/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-[#002d72]">
          <span className="tracking-widest uppercase" style={{ fontSize: '13px' }}>Stay Connected</span>
          <div className="flex items-center gap-6 ml-auto" style={{ fontSize: '13px' }}>
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'X' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Youtube, label: 'YouTube' },
              { Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" className="flex items-center gap-2 tracking-widest uppercase hover:text-[#86c8bc]">
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#002d72] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <div className="tracking-widest uppercase mb-3" style={{ fontSize: '14px' }}>
              Johns Hopkins University, Whiting School of Engineering
            </div>
            <address className="not-italic mb-5 leading-relaxed opacity-90" style={{ fontSize: '14px' }}>
              3400 North Charles Street<br />
              Baltimore, MD 21218
            </address>
            <a href="#" className="tracking-widest uppercase border-b border-[#86c8bc] pb-1 hover:text-[#86c8bc]" style={{ fontSize: '13px' }}>
              Get Directions
            </a>
            <div className="mt-8 tracking-widest uppercase opacity-80" style={{ fontSize: '13px' }}>Contact</div>
          </div>

          <ul className="grid grid-cols-1 gap-3 md:justify-self-end" style={{ fontSize: '14px' }}>
            {["Apply", "Visit Accreditations", "Johns Hopkins University", "Engineering for Professionals", "Visit"].map((item) => (
              <li key={item}>
                <a href="#" className="tracking-widest uppercase hover:text-[#86c8bc] flex items-center gap-2">
                  {item} <span aria-hidden>›</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white border-t border-[#5a5c5a]/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-4 flex flex-wrap gap-x-6 gap-y-2 items-center text-[#5a5c5a]" style={{ fontSize: '12px' }}>
          {["Privacy Statement", "Accessibility", "University Policies", "Copyright Compliance Policy"].map((l) => (
            <a key={l} href="#" className="hover:text-[#002d72]">{l}</a>
          ))}
          <span className="ml-auto">2026 Johns Hopkins University. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
