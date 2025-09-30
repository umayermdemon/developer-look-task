import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bell, Globe, Home, Menu, Search, X } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Homes");
  const [showModal, setShowModal] = useState(false);
  const [searchRef, setSearchRef] = useState("");

  const tabs = useMemo(
    () => [
      {
        name: "Homes",
        icon: <Home className="w-8 h-8 text-black" />,
        href: "/",
      },
      {
        name: "Experiences",
        icon: <span className="text-3xl">🎈</span>,
        href: "/experiences",
      },
      {
        name: "Services",
        icon: <Bell className="w-8 h-8 text-black" />,
        href: "/services",
      },
    ],
    []
  );

  // Search Tabs logic
  const searchTabs = useMemo(
    () => [
      {
        name: "Where",
        placeholder: "Where",
        description: "Search destinations",
        input: true,
      },
      {
        name: "Check in",
        placeholder: "Check in",
        description: "Add Date",
        input: false,
      },
      {
        name: "Check out",
        placeholder: "Check out",
        description: "Add Date",
        input: false,
      },
      {
        name: "Who",
        placeholder: "Who",
        description: "Add Guests",
        input: false,
      },
    ],
    []
  );

  const [activeSearchTab, setActiveSearchTab] = useState("");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const searchTabContainerRef = useRef<HTMLDivElement>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const idx = tabs.findIndex((tab) => tab.name === activeTab);
    const node = tabRefs.current[idx];
    if (node) {
      const rect = node.getBoundingClientRect();
      const parentRect = node.parentElement?.getBoundingClientRect();
      setUnderline({
        left: rect.left - (parentRect?.left ?? 0),
        width: rect.width,
      });
    }
  }, [activeTab, tabs]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchTabContainerRef.current &&
        !searchTabContainerRef.current.contains(event.target as Node)
      ) {
        setActiveSearchTab("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="w-full shadow-sm bg-[#fbfbfb] sticky top-0 z-50 px-0 md:px-8">
        {/* Mobile Navbar */}
        <div className="w-full bg-white md:hidden items-center">
          <div className="flex flex-col items-center px-4 pt-3 pb-2">
            {/* Search Bar */}
            <button
              className="w-full max-w-md flex items-center gap-2 rounded-full border border-black px-4 py-3 bg-white shadow transition focus:ring-2 focus:ring-pink-500"
              onClick={() => setShowModal(true)}>
              <Search className="w-5 h-5 text-gray-700" />
              <span className="text-base text-gray-700 font-medium">
                Start your search
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-2xl font-bold text-pink-600">airbnb</span>
          </div>

          {/* Tabs */}
          <div className="flex items-center space-x-1 md:space-x-6 relative ml-0 lg:ml-28 sm:w-full md:w-auto">
            {tabs.map((tab, idx) => (
              <button
                key={tab.name}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                onClick={() => setActiveTab(tab.name)}
                className={` flex-1 px-4 py-2 text-sm font-medium bg-transparent outline-none transition-colors duration-200 group
                  ${activeTab === tab.name ? "text-black" : "text-gray-500"}`}>
                <Link to={tab.href} className="flex items-center gap-1">
                  {" "}
                  <span
                    className={cn(
                      activeTab !== tab.name &&
                        "transition-transform duration-200 group-hover:scale-110 flex items-center"
                    )}>
                    {tab.icon}
                  </span>
                  {tab.name}
                </Link>
              </button>
            ))}
            <span
              className="absolute bottom-0 h-[2px] bg-pink-600 transition-all duration-300"
              style={{
                left: underline.left,
                width: underline.width,
              }}
            />
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-3 ">
            <Button
              variant="ghost"
              className="text-sm font-medium hidden lg:flex">
              Become a host
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Search Tabs */}
        <div className="hidden md:flex items-center justify-center py-3">
          <div
            ref={searchTabContainerRef}
            className={`relative flex items-center  rounded-2xl shadow-md border pr-2 w-[700px] ${
              activeSearchTab
                ? "bg-[#dddddd] rounded-2xl"
                : "bg-white rounded-2xl"
            }`}>
            <div className="flex w-full relative rounded-full">
              {searchTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSearchTab(tab.name)}
                  className={`flex-1 px-4 py-2 text-sm font-medium outline-none  transition-colors duration-200 cursor-pointer
                  ${
                    activeSearchTab === tab.name
                      ? "text-black bg-white rounded-2xl shadow-md"
                      : `${
                          activeSearchTab
                            ? "bg-[#dddddd] rounded-2xl hover:bg-white"
                            : "bg-white rounded-2xl hover:bg-[#dddddd]"
                        }`
                  }`}>
                  {tab.name}
                  <div className="relative">
                    {tab.input && (
                      <input
                        type="text"
                        placeholder={tab.description}
                        className="rounded-lg p-1 outline-none"
                        value={searchRef}
                        onChange={(e) => setSearchRef(e.target.value)}
                      />
                    )}
                    {activeSearchTab && tab.input === true && searchRef && (
                      <span className="absolute -top-2 right-0 p-1 cursor-pointer hover:bg-gray-200 rounded-full">
                        <X
                          size={16}
                          onClick={() => {
                            setSearchRef("");
                          }}
                        />
                      </span>
                    )}
                  </div>
                  {!tab.input && (
                    <div className="text-xs text-gray-500">
                      {tab.placeholder}
                    </div>
                  )}
                </button>
              ))}
            </div>
            <Button
              size="icon"
              className="rounded-full bg-pink-600 text-white ml-2">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Search Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 p-6">
              <h2 className="text-lg font-semibold mb-4">Search</h2>
              {/* Add your search form or inputs here */}
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full border rounded-lg px-3 py-2 mb-3"
              />
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 mb-3"
              />
              <input
                type="number"
                placeholder="Guests"
                className="w-full border rounded-lg px-3 py-2 mb-3"
              />
              <Button
                className="w-full bg-pink-600 text-white rounded-full mt-2"
                onClick={() => setShowModal(false)}>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
