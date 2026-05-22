import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router";

const NAV_LINKS = ["Features", "Pricing", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token) {
      setIsLoggedIn(true);
      setUserName(user || "User");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClick = () => {
      setDropdownOpen(false); // seedha false set karo, condition ki zarurat nahi
    };

    if (dropdownOpen) {
      // ← yahan dropdownOpen padhna pada
      setDropdownOpen(false); // stale closure! purani value milegi ❌
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 border-b border-neutral-200 backdrop-blur-md font-instrument">
        <div className="max-w-[1160px] mx-auto px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-lg bg-neutral-950 flex items-center justify-center text-white font-bricolage font-bold text-[15px]">
              AI
            </div>
            <span className="font-bricolage font-bold text-base text-neutral-950">
              InvoiceAI
            </span>
          </a>

          <ul className="hidden md:flex gap-9 list-none">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-950 no-underline tracking-tight transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <div className="flex items-center gap-3 relative">
                <div
                  // onClick={() => setDropdownOpen(!dropdownOpen)}
                  onClick={(e) => {
                    e.stopPropagation(); // document tak event mat jane do
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm cursor-pointer"
                >
                  {userName.charAt(0).toUpperCase()}
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 top-14 z-50 w-56 overflow-hidden rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl p-2 flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-200">
                    <a
                      href="/Register"
                      className="text-sm text-neutral-700 hover:bg-neutral-50 px-3 py-2 rounded-lg no-underline"
                    >
                      Register to another account
                    </a>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <a
                href="/login"
                className="px-[18px] py-2 rounded-lg border border-neutral-300 text-sm font-medium text-neutral-800 hover:border-neutral-400 no-underline"
              >
                Log in
              </a>
            )}

            {location.pathname === "/dashboard" ? (
              // Dashboard page pe — Back button

              <a
                href="/"
                className="px-5 py-2 rounded-lg bg-neutral-950 text-sm font-semibold text-white hover:bg-neutral-800 no-underline tracking-tight"
              >
                ← Back
              </a>
            ) : (
              // Home page pe — Get Started button

              <a
                href="/dashboard"
                className="px-5 py-2 rounded-lg bg-neutral-950 text-sm font-semibold text-white hover:bg-neutral-800 no-underline tracking-tight"
              >
                Get Started →
              </a>
            )}
            <button
              className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-[1.5px] bg-neutral-950 rounded" />
              <span className="block w-5 h-[1.5px] bg-neutral-950 rounded" />
              <span className="block w-5 h-[1.5px] bg-neutral-950 rounded" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-7 bg-transparent border-none text-2xl cursor-pointer text-neutral-950"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="font-bricolage text-3xl font-bold text-neutral-950 no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="/"
            className="px-8 py-3 rounded-lg bg-neutral-950 text-base font-semibold text-white no-underline"
          >
            Get Started →
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
