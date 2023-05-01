
import {  useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/config/firebase";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";


type NavItem = {
  name: string;
  href: string;
  displayOn: string[];
 
};
interface User {
  name: string;
  email: string;
}

interface NavbarProps {
  showLinks?: boolean;
  currentPage?: string;
  user?: User;
}



const NAV_ITEMS: NavItem[] = [
  {
    name: "Latest News",
    href: "/homepage",
    displayOn: [
      "homepage",
      "landing",
      "business",
      "world",
      "sports",
      "articles",
      "videos",
    ],
  },
  {
    name: "Business",
    href: "/business",
    displayOn: [
      "homepage",
      "landing",
      "business",
      "world",
      "sports",
      "articles",
      "videos",
    ],
  },
  {
    name: "World",
    href: "/world",
    displayOn: [
      "homepage",
      "landing",
      "business",
      "sports",
      "videos",
      "world",
      "articles",
    ],
  },
  {
    name: "Sports",
    href: "/sports",
    displayOn: [
      "homepage",
      "landing",
      "business",
      "world",
      "videos",
      "sports",
      "articles",
    ],
  },
  {
    name: "Articles",
    href: "/articles",
    displayOn: [
      "homepage",
      "landing",
      "business",
      "sports",
      "world",
      "articles",
      "videos",
    ],
  },
  {
    name: "Videos",
    href: "/videos",
    displayOn: [
      "homepage",
      "landing",
      "business",
      "sports",
      "world",
      "videos",
      "articles",
    ],
  },

  { name: "Register", href: "/signup", displayOn: ["home", "signin"] },
  { name: "Sign In", href: "/signin", displayOn: ["home", "signup"] },
  
];

const Navbar: React.FC<NavbarProps> = ({ showLinks = true }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentPage = (() => {
    const path = router.asPath;

    if (path === "/" || path === "/index") {
      return "home";
    }

    const pathSegments = path.split("/").filter((segment) => segment !== "");
    return pathSegments[0];
  })();

  const shouldDisplayLink = (navItem: NavItem) => {
    return navItem.displayOn.includes(currentPage);
  };

  async function signOutUser() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    try {
      await signOut(auth);
      toast.error("Signout successfully!");
      // router.push("/")
    } catch (error) {
      // An error happened
    }
  } 
  
 
  return (
    <nav className="sticky dark:bg-white bg-slate-800 text-white">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link legacyBehavior href="/">
              <Image
                className="h-8 w-32 mr-2"
                src="/log1.svg"
                width={0}
                height={0}
                alt="BM News Logo"
              />
            </Link>
            
          </div>

        

          {/* Navigation */}
          {showLinks && (
            
            // <div className="hidden sm:block">
            <div className="block sm:hidden">
              <div className="flex space-x-5">
           
                {NAV_ITEMS.filter(shouldDisplayLink).map((navItem) => (
                  <Link legacyBehavior key={navItem.name} href={navItem.href}>
                    <a className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      {navItem.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <button
          onClick={signOutUser}
          
          >
            Sign Out
          </button>

          <div className="hidden sm:flex">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>{" "}
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="hidden sm:flex">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.filter(shouldDisplayLink).map((navItem) => (
              <Link legacyBehavior key={navItem.name} href={navItem.href}>
                <a className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  {navItem.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;