import { cn } from "@/lib/utils";
import { Heart, Home, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const BOTTOM_NAV = [
  { name: "Explore", icon: <Home className="w-6 h-6" />, href: "/" },
  {
    name: "Wishlists",
    icon: <Heart className="w-6 h-6" />,
    href: "/wishlists",
  },
  { name: "Log in", icon: <User className="w-6 h-6" />, href: "/login" },
];

const NavMobileFooter = () => {
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show/hide bottom nav on scroll
  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setShowBottomNav(true);
      } else if (currentY > lastScrollY) {
        setShowBottomNav(false); // scrolling down
      } else {
        setShowBottomNav(true); // scrolling up
      }
      setLastScrollY(currentY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 w-full bg-white border-t z-40 transition-transform duration-300 md:hidden",
        showBottomNav ? "translate-y-0" : "translate-y-full"
      )}>
      <div className="flex justify-around items-center py-2">
        {BOTTOM_NAV.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex flex-col items-center text-xs text-gray-700 hover:text-pink-600 transition-colors">
            {item.icon}
            <span className="mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavMobileFooter;
