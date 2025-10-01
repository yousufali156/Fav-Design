import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Logo / Title */}
        <div className="text-2xl font-bold text-white">
          FavDesign
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-gray-400">
          <span>Email: info@favdesign.com</span>
          <span>Phone: +880 1234 5678</span>
          <span>Address: Dhaka, Bangladesh</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FavDesign. All rights reserved.
      </div>
    </footer>
  );
}
