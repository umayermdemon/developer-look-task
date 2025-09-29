import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Bell, Globe, Home, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Homes");

  const tabs = [
    { name: "Homes", icon: <Home className="w-4 h-4" />, href: "/" },
    {
      name: "Experiences",
      icon: <span className="text-lg">🎈</span>,
      new: true,
      href: "/experiences",
    },
    {
      name: "Services",
      icon: <Bell className="w-4 h-4" />,
      new: true,
      href: "/services",
    },
  ];
  return (
    <header className="w-full shadow-sm bg-[#fbfbfb] sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-pink-600">airbnb</span>
        </div>

        {/* Tabs */}
        <nav className="flex items-center space-x-6">
          {tabs.map((tab) => (
            <Link key={tab.name} to={tab.href}>
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium relative",
                  activeTab === tab.name ? "text-black" : "text-gray-500"
                )}>
                {tab.icon}
                {tab.name}
                {tab.new && (
                  <span className="absolute -top-2 right-0 text-[10px] bg-blue-600 text-white rounded-full px-1">
                    NEW
                  </span>
                )}
              </button>
            </Link>
          ))}
        </nav>

        {/* Right Menu */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium">
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

      {/* Search Bar */}
      <div className="flex items-center justify-center py-3">
        <div className="flex items-center bg-white rounded-full shadow-md border px-4 py-2 w-[700px]">
          <Input
            placeholder="Where"
            className="border-none focus:ring-0 text-sm"
          />
          <div className="border-l h-6 mx-3" />
          <Input
            placeholder="Check in"
            className="border-none focus:ring-0 text-sm"
          />
          <div className="border-l h-6 mx-3" />
          <Input
            placeholder="Check out"
            className="border-none focus:ring-0 text-sm"
          />
          <div className="border-l h-6 mx-3" />
          <Input
            placeholder="Who"
            className="border-none focus:ring-0 text-sm"
          />
          <Button
            size="icon"
            className="rounded-full bg-pink-600 text-white ml-2">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
