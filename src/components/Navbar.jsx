import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-green-900/90 text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          My ePortfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {/* Home */}
          <Link to="/" className="hover:text-green-300 transition cursor-pointer">
            Home
          </Link>

          {/* About Me */}
          <div className="relative">
            <button onClick={() => toggleDropdown("about")} className="hover:text-green-300 transition cursor-pointer">
              About Me
            </button>

            {openDropdown === "about" && (
              <div className="absolute bg-green-800/95 shadow-xl rounded-lg py-3 top-10 w-48">
                <Link to="/about/me" className="block px-4 py-2 hover:bg-green-700">
                  Overview
                </Link>
                <Link to="/about/me/education" className="block px-4 py-2 hover:bg-green-700">
                  Education
                </Link>
                <Link to="/about/me/experience" className="block px-4 py-2 hover:bg-green-700">
                  Experience
                </Link>
              </div>
            )}
          </div>

          {/* Philosophies */}
          <div className="relative">
            <button onClick={() => toggleDropdown("philosophy")} className="hover:text-green-300 transition cursor-pointer">
              Educational Philosophies
            </button>

            {openDropdown === "philosophy" && (
              <div className="absolute bg-green-800/95 shadow-xl rounded-lg py-3 top-10 w-56">
                <Link to="/philosophies/overview" className="block px-4 py-2 hover:bg-green-700">
                  Overview
                </Link>
                <Link to="/philosophies/i-believe" className="block px-4 py-2 hover:bg-green-700">
                  I Believe
                </Link>
                <Link to="/philosophies/inspirational-quotes" className="block px-4 py-2 hover:bg-green-700">
                  Inspirational Quotes
                </Link>
              </div>
            )}
          </div>

          {/* Professional Learnings */}
          <div className="relative">
            <button onClick={() => toggleDropdown("learning")} className="hover:text-green-300 transition cursor-pointer">
              Professional Learnings
            </button>

            {openDropdown === "learning" && (
              <div className="absolute bg-green-800/95 shadow-xl rounded-lg py-3 top-10 w-64">
                <Link to="/professional/learnings/autobiography" className="block px-4 py-2 hover:bg-green-700">
                  Autobiography
                </Link>
                <Link to="/professional/learnings/reconciliation" className="block px-4 py-2 hover:bg-green-700">
                  Journey Towards Reconciliation
                </Link>
                <Link to="/professional/learnings/field-experiences" className="block px-4 py-2 hover:bg-green-700">
                  Field Experiences
                </Link>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-green-300 transition text-xl"
            >
              <FiSearch />
            </button>

            {searchOpen && (
              <div className="absolute right-0 mt-2">
                <SearchBar onClose={() => setSearchOpen(false)} />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-900/95 px-6 py-4 space-y-3">

          <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-white/10">
            Home
          </Link>

          {/* About Me MOBILE */}
          <button className="w-full text-left py-2" onClick={() => toggleDropdown("about")}>
            About Me
          </button>
          {openDropdown === "about" && (
            <div className="ml-4 space-y-2">
              <Link to="/about/me" className="block">Overview</Link>
              <Link to="/about/me/education" className="block">Education</Link>
              <Link to="/about/me/experience" className="block">Experience</Link>
            </div>
          )}

          {/* Philosophies MOBILE */}
          <button className="w-full text-left py-2" onClick={() => toggleDropdown("philosophy")}>
            Educational Philosophies
          </button>
          {openDropdown === "philosophy" && (
            <div className="ml-4 space-y-2">
              <Link to="/philosophies/overview" className="block">Overview</Link>
              <Link to="/philosophies/i-believe" className="block">I Believe</Link>
              <Link to="/philosophies/inspirational-quotes" className="block">Inspirational Quotes</Link>
            </div>
          )}

          {/* Professional Learnings MOBILE */}
          <button className="w-full text-left py-2" onClick={() => toggleDropdown("learning")}>
            Professional Learnings
          </button>
          {openDropdown === "learning" && (
            <div className="ml-4 space-y-2">
              <Link to="/professional/learnings/autobiography" className="block">Autobiography</Link>
              <Link to="/professional/learnings/reconciliation" className="block">Reconciliation</Link>
              <Link to="/professional/learnings/field-experiences" className="block">Field Experiences</Link>
            </div>
          )}

          {/* Search (Mobile) */}
          <button className="text-xl mt-3">
            <FiSearch />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
