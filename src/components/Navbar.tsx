
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [showAdminAccess, setShowAdminAccess] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "L'Agence", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  // Toggle admin access on triple Alt+A keypress
  useEffect(() => {
    let altKeyPressCount = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.altKey && e.code === "KeyA") {
        e.preventDefault();
        altKeyPressCount++;
        
        clearTimeout(timeoutId);
        
        if (altKeyPressCount === 3) {
          setShowAdminAccess(prev => !prev);
          altKeyPressCount = 0;
        } else {
          timeoutId = setTimeout(() => {
            altKeyPressCount = 0;
          }, 1000);
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NoCode Agency
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(item.href) 
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {showAdminAccess && (
              <Link to="/admin">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors hover:text-blue-600 ${
                    isActive(item.href) ? "text-blue-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {showAdminAccess && (
                <Link to="/admin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-fit">
                    Admin
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
