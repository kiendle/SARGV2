import { Link, useLocation } from "react-router";
import logoImage from "../../imports/whiting.logo_.small_.horizontal.white_-e1678822349978.png";

const primary = ["Home", "Projects", "People", "Publications", "News", "Get Involved", "Contact"];

export function SiteHeader() {
  const location = useLocation();

  const getItemPath = (item: string) => {
    if (item === "Home") return "/";
    if (item === "Projects") return "/projects";
    if (item === "People") return "/people";
    if (item === "Publications") return "/publications";
    if (item === "News") return "/news";
    if (item === "Get Involved") return "/get-involved";
    if (item === "Contact") return "/contact";
    return "#";
  };

  const isActive = (item: string) => {
    const itemPath = getItemPath(item);
    if (itemPath === "/") {
      return location.pathname === "/";
    }
    if (itemPath === "/projects") {
      return location.pathname.startsWith("/projects");
    }
    return location.pathname === itemPath;
  };

  return (
    <header className="bg-black text-white" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 pt-6 pb-3">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center">
              <img
                src={logoImage}
                alt="Johns Hopkins Whiting School of Engineering"
                className="h-16"
              />
            </a>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="tracking-widest uppercase text-white" style={{ fontSize: '18px', fontWeight: 600 }}>
              Sports Analytics Research Group
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button className="flex items-center gap-2 tracking-wider uppercase opacity-90 hover:opacity-100 px-4 py-2 border-2 border-[#86c8bc] bg-transparent" style={{ fontSize: '13px' }}>
              Contact SARG
            </button>
          </div>
        </div>

        <div className="mt-6 border-t border-white/15 pt-3">
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2" style={{ fontSize: '14px' }}>
            {primary.map((item) => (
              <Link
                key={item}
                to={getItemPath(item)}
                className={`tracking-wide hover:text-[#86c8bc] transition-colors ${isActive(item) ? 'text-[#86c8bc]' : ''}`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-[#86c8bc] text-[#1a1a1a]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-3 text-center tracking-wide" style={{ fontSize: '14px' }}>
          Frontier Sports Analytics Research Group
        </div>
      </div>
    </header>
  );
}
