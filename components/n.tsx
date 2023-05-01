// // import { useState } from "react";
// // import Link from "next/link";
// // import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
// // import { useRouter } from "next/router";
// // import Image from "next/image";
// // import { auth } from "@/config/firebase";
// // import React from "react";

// // type NavItem = {
// //   name: string;
// //   href: string;
// //   displayOn: string[];
// // };

// // interface User {
// //   name: string;
// //   email: string;
// // }

// // interface NavbarProps {
// //   showLinks?: boolean;
// //   currentPage?: string;
// //   user?: User;
// // }

// // const NAV_ITEMS: NavItem[] = [
// //   { name: "Sign In", href: "/signin", displayOn: ["home", "signup"] },
// //   {
// //     name: "Sign Out",
// //     href: "/",
// //     displayOn: [
// //       "homepage",
// //       "landing",
// //       "business",
// //       "sports",
// //       "world",
// //       "videos",
// //       "articles",
// //     ],
// //   },
// // ];

// // const Navbar: React.FC<NavbarProps> = ({ showLinks = true }) => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const router = useRouter();

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   const handleSignOut = () => {
// //     auth
// //       .signOut()
// //       .then(() => {
// //         router.push("/");
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   const currentPage = (() => {
// //     const path = router.asPath;

// //     if (path === "/" || path === "/index") {
// //       return "home";
// //     }

// //     const pathSegments = path.split("/").filter((segment) => segment !== "");
// //     return pathSegments[0];
// //   })();

// //   const shouldDisplayLink = (navItem: NavItem) => {
// //     return navItem.displayOn.includes(currentPage);
// //   };

// //   return (
// //     <nav className="sticky dark:bg-white bg-slate-800 text-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="flex items-center justify-between h-16">
// //           {showLinks && (
// //             <div className="block sm:hidden">
// //               <div className="flex space-x-5">
// //                 {NAV_ITEMS.filter(shouldDisplayLink).map((navItem) => (
// //                   <Link key={navItem.name} href={navItem.href}>
// //                     <a className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
// //                       {navItem.name}
// //                     </a>
// //                   </Link>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           <div className="hidden sm:flex">
// //             <button
// //               onClick={toggleMenu}
// //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
// //               aria-expanded={isMenuOpen}
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               <svg
// //                 className="h-6 w-6"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 stroke="white"
// //                 viewBox="0 0 24 24"
// //                 aria-hidden="true"
// //               >
// // <React.Fragment>
// // {isMenuOpen ? (
// // <path
// //    strokeLinecap="round"
// //    strokeLinejoin="round"
// //    strokeWidth={2}
// //    d="M6 18L18 6M6 6l12 12"
// //  />
// // ) : (
// // <path
// //    strokeLinecap="round"
// //    strokeLinejoin="round"
// //    strokeWidth={2}
// //    d="M4 6h16M4 12h16M4 18h16"
// //  />
// // )}
// // </React.Fragment>
// // </svg>
// // </button>
// // <div className="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
// //           <Link href="/">
// //             <a className="flex items-center">
// //               <Image
// //                 src="/logo.png"
// //                 alt="Logo"
// //                 width={50}
// //                 height={50}
// //               />
// //               <span className="ml-2 text-xl font-bold uppercase">
// //                 News
// //               </span>
// //             </a>
// //           </Link>
// //         </div>

// //         {showLinks && (
// //           <div className="hidden md:block md:ml-10 md:pr-4">
// //             <button
// //               className="flex items-center text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white"
// //               onClick={() => {
// //                 document.documentElement.classList.toggle("dark");
// //               }}
// //             >
// //               <span className="sr-only">Toggle Dark Mode</span>
// //               <MoonIcon className="h-6 w-6" />
// //               <SunIcon className="h-6 w-6" />
// //             </button>
// //             {auth.currentUser && (
// //               <button
// //                 onClick={handleSignOut}
// //                 className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white ml-4"
// //               >
// //                 Sign Out
// //               </button>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   </div>

// //   {isMenuOpen && (
// //     <div className="sm:hidden" role="menu" aria-orientation="vertical">
// //       {NAV_ITEMS.filter(shouldDisplayLink).map((navItem) => (
// //         <Link key={navItem.name} href={navItem.href}>
// //           <a
// //             className={`${
// //               navItem.name === currentPage
// //                 ? "bg-slate-900 text-white"
// //                 : "text-gray-300 hover:text-gray-100"
// //             } block px-3 py-2 rounded-md text-base font-medium`}
// //             role="menuitem"
// //           >
// //             {navItem.name}
// //           </a>
// //         </Link>
// //       ))}
// //     </div>
// //   )}
// // </nav>
// // );
// // };

// // export default Navbar;


// import { useState } from "react";
// import Link from "next/link";
// import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { auth } from "@/config/firebase";
// import React from "react";

// type NavItem = {
//   name: string;
//   href: string;
//   displayOn: string[];
// };

// interface User {
//   name: string;
//   email: string;
// }

// interface NavbarProps {
//   showLinks?: boolean;
//   currentPage?: string;
//   user?: User;
// }

// const NAV_ITEMS: NavItem[] = [
//   { name: "Sign In", href: "/signin", displayOn: ["home", "signup"] },
//   {
//     name: "Sign Out",
//     href: "/",
//     displayOn: [
//       "homepage",
//       "landing",
//       "business",
//       "sports",
//       "world",
//       "videos",
//       "articles",
//     ],
//   },
// ];

// const Navbar: React.FC<NavbarProps> = ({ showLinks = true }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         router.push("/");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const currentPage = (() => {
//     const path = router.asPath;

//     if (path === "/" || path === "/index") {
//       return "home";
//     }

//     const pathSegments = path.split("/").filter((segment) => segment !== "");
//     return pathSegments[0];
//   })();

//   const shouldDisplayLink = (navItem: NavItem) => {
//     return navItem.displayOn.includes(currentPage);
//   };

//   return (
//     <nav className="sticky dark:bg-white bg-slate-800 text-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {showLinks && (
//             <div className="block sm:hidden">
//               <div className="flex space-x-5">
//                 {NAV_ITEMS.filter(shouldDisplayLink).map((navItem) => (
//                   <Link key={navItem.name} href={navItem.href}>
//                     <a className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                       {navItem.name}
//                     </a>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="hidden sm:flex">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//               aria-expanded={isMenuOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="white"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                     />
//                     ) : (
//                     <path
//                                      strokeLinecap="round"
//                                      strokeLinejoin="round"
//                                      strokeWidth="2"
//                                      d="M4 6h16M4 12h16M4 18h16"
//                                    />
//                     )}
//                     </svg>
//                     </button>
//                     <div className="hidden sm:block sm:ml-6">
//           <div className="flex space-x-5">
//             <Link href="/">
//               <a className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Home
//               </a>
//             </Link>

//             <Link href="/signup">
//               <a className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Sign Up
//               </a>
//             </Link>

//             {NAV_ITEMS.filter(shouldDisplayLink).map((navItem) => (
//               <Link key={navItem.name} href={navItem.href}>
//                 <a className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   {navItem.name}
//                 </a>
//               </Link>
//             ))}

//             <button
//               onClick={handleSignOut}
//               className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Sign Out
//             </button>

//             <button className="text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//               <SunIcon className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>
// );
// };

// export default Navbar;