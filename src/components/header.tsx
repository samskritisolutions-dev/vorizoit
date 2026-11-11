"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./brand";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-header-sticky-wrap">
      <div className="announcement">
        <span className="pulse" /> Building what’s next, together{" "}
        <span className="announcement-right">US · INDIA · GLOBAL DELIVERY</span>
      </div>
      <header className="site-header" id="top">
        <Brand />
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          className={`main-nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {["About", "What we do", "Expertise", "Industries", "Careers"].map(
            (item, i) => (
              <a
                key={item}
                href={
                  [
                    "#about",
                    "#services",
                    "#expertise",
                    "#industries",
                    "#careers",
                  ][i]
                }
                onClick={closeMenu}
              >
                {item}
              </a>
            ),
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>
    </div>
  );
}
