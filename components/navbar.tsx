import { useState } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import Image from 'next/image';

type NavItem = {
  name: string;
  href: string;
  displayOn: string[];
};

interface NavbarProps {
  showLinks?: boolean;
  currentPage?: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Latest News', href: '/homepage', displayOn: ['homepage','landing','business','world','sports','articles','videos']},
  { name: 'Business', href: '/business', displayOn: ['homepage','landing','business','world','sports','articles','videos']},
  { name: 'World', href: '/world', displayOn: ['homepage','landing','business','sports','videos','world','articles']},
  { name: 'Sports', href: '/sports', displayOn: ['homepage','landing','business','world','videos','sports','articles']},
  { name: 'Articles', href: '/articles', displayOn: ['homepage','landing','business','sports','world','articles','videos']},
  { name: 'Videos', href: '/videos', displayOn: ['homepage','landing','business','sports','world','videos','articles']},
  
  { name: 'Register', href: '/signup', displayOn: ['home','signin'  ]},
  { name: 'Sign In', href: '/signin', displayOn: ['home','signup']},
  { name: 'Sign Out', href: '/', displayOn: ['homepage','landing','business','sports','world','videos','articles']}
];

const Navbar: React.FC<NavbarProps> = ({ showLinks = true  }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentPage = (() => {
    const path = router.asPath;

    if (path === '/' || path === '/index') {
      return 'home';
    }

    const pathSegments = path.split('/').filter(segment => segment !== '');
    return pathSegments[0];
  })();

  const shouldDisplayLink = (navItem: NavItem) => {
    return navItem.displayOn.includes(currentPage);
  };

  return (
    <nav className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link legacyBehavior href="/">
                <Image
                  className="h-8 w-auto mr-2 "
                  src="/log1.svg"
                  width={400}
                  height={600}
                  alt="BM News Logo"
                />

            </Link>
          </div>  
          

          {/* Navigation */}
          { showLinks &&(
          <div className="hidden sm:block ">
            <div className="flex space-x-5 ">
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
          {/* Dark/Light mode toggle */}
          {/* <div className="flex items-center ">
            <button onClick={toggleDarkMode} className="p-2">
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-orange-300" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-100" />
              )}
            </button>
          </div> */}

          {/* Hamburger menu */}
          <div className="flex sm:hidden">
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
                stroke="currentColor"
viewBox="0 0 24 24"
aria-hidden="true"
>
<path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M4 6h16M4 12h16M4 18h16"
             />
</svg>
</button>
</div>
</div>
</div>
  {/* Mobile menu */}
  {isMenuOpen && (
    <div className="sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {NAV_ITEMS.map((navItem) => (
          <Link legacyBehavior key={navItem.name} href={navItem.href}>
            <a
              className="text-gray-400 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
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
               
