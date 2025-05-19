import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import gpay from '../assets/google-pay.png'
import mastercard from '../assets/mastercard.png'
import phonepe from '../assets/phonepe.png'
import visa from '../assets/visa.png'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {/* Secure Payments */}
          <div>
            <h4 className="font-bold mb-3">100% SECURE PAYMENTS</h4>
            <div className="flex flex-wrap items-center gap-2">
              <img src={gpay} alt="GPay" className="h-6" />
              <img src={phonepe} alt="PhonePe" className="h-6" />
              <img src={visa} alt="Visa" className="h-6" />
              <img src={mastercard} alt="Mastercard" className="h-6" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-3">COMPANY</h4>
            <ul className="space-y-1">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">T&C's</a></li>
              <li><a href="#">Refer & Earn</a></li>
            </ul>
          </div>

          {/* Best Sellers */}
          <div>
            <h4 className="font-bold mb-3">BEST SELLERS</h4>
            <ul className="space-y-1">
              <li><a href="#">Wall Photo Frames</a></li>
              <li><a href="#">Photo Stands</a></li>
              <li><a href="#">Mobile Cases</a></li>
              <li><a href="#">Photo Mugs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-3">SUPPORT</h4>
            <ul className="space-y-1">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Return Order</a></li>
              <li><a href="#">FAQ's</a></li>
            </ul>
          </div>

          {/* More Info + Social */}
          <div>
            <h4 className="font-bold mb-3">MORE INFO</h4>
            <ul className="space-y-1 mb-4">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Your Credits</a></li>
            </ul>
            <h4 className="font-bold mb-2">FOLLOW US:</h4>
            <div className="flex gap-3 text-xl">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="text-center text-xs text-gray-600 border-t border-gray-300 pt-4">
          Copyright 2025. All rights reserved by{" "}
          <a href="https://www.mygallery.com" className="text-blue-500 hover:underline">
            www.mygallery.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
