import React from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white ">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-64">
          
          {/* About us */}
          <div>
            <h2 className="text-lg font-medium mb-4">About Us</h2>
            <ul className="space-y-2">
              <li>
                <Link legacyBehavior href="#">
                  <a className="text-gray-300 hover:text-white">
                    Our Story
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a className="text-gray-300 hover:text-white">
                    Meet the Team
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>


          

          {/* Logo */}
          {/* <div className="text-center md:text-left"> */}
            <Link legacyBehavior href="/">
              
                <Image
                  className="h-24 w-40  "
                  src="/log1.svg"
                  alt="BM News Logo"
                  width={400}
                  height={600}
                  
                />
            </Link>
          {/* </div> */}

{/* Follow us */}
<div>
            <h2 className="text-lg font-medium mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Attribution */}
        <div className="mt-8">
          <p className="text-center text-gray-200">
            © {new Date().getFullYear()} BM News. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
