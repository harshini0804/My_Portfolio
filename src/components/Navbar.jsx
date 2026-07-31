import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "journey", label: "Journey" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "github", label: "GitHub" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white z-20 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Desktop links */}
        <ul className="hidden md:flex md:space-x-6">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden ml-auto text-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded p-1"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 pb-6 pt-2 border-t border-white/10">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer hover:text-cyan-400 transition-colors text-lg"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
