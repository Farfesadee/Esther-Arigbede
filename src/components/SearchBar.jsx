import React, { useState } from "react";
import { Link } from "react-router-dom";



const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState("");

  // Pages that can be searched
  const pages = [
    { title: "About Me", path: "/about/me" },
    { title: "Education", path: "/about/me/education" },
    { title: "Experience", path: "/about/me/experience" },
    { title: "Educational Philosophies", path: "/philosophies/overview" },
    { title: "I Believe", path: "/philosophies/i-believe" },
    { title: "Inspirational Quotes", path: "/philosophies/inspirational-quotes" },
    { title: "Autobiography", path: "/professional/learnings/autobiography" },
    { title: "Journey Towards Reconciliation", path: "/professional/learnings/reconciliation" },
    { title: "Field Experiences", path: "/professional/learnings/field-experiences" },
  ];

  // Filter search results
  const filtered = pages.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="absolute right-0 mt-2 w-64 bg-green-800/95 shadow-xl rounded-lg p-4 z-50">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        autoFocus
        className="w-full px-3 py-2 rounded-md bg-green-900/60 text-white placeholder-green-300 focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Results */}
      <div className="mt-3 max-h-60 overflow-y-auto">
        {query && filtered.length === 0 && (
          <p className="text-green-300 text-center text-sm">No matches found.</p>
        )}

        {filtered.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={onClose}
            className="block px-3 py-2 rounded hover:bg-green-700 text-white"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
