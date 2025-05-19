import React,{useState} from "react";
import { Link } from "react-router";
import bannerClock from '../assets/banner-clock.png';
import { FaBolt, FaFilter, FaClock, FaThLarge, FaBaby, FaImages, FaGem } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { clockDesigns } from "../assets/clockDesigns";

const ClockPage = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = [
        { label: "All", icon: <FaThLarge /> },
        { label: "Classic", icon: <FaClock /> },
        { label: "Kids", icon: <FaBaby /> },
        { label: "Multi Pic", icon: <FaImages /> },
        { label: "Popular", icon: <FaGem /> },
    ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-center justify-start py-10 px-4 space-y-12">

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase">
          Acrylic Wall Clocks
        </h1>

        {/* Banner Section */}
        <div className="bg-gray-100 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-6xl w-full">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Acrylic Wall Clocks</h2>
            <p className="text-gray-600 text-sm md:text-base">
              In the world of time, nothing lasts forever, but memories do.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={bannerClock}
              alt="Acrylic Wall Clock"
              className="w-full max-w-[250px] md:w-64 h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Offer Section */}
        <div className="border border-blue-300 shadow-md p-4 md:p-6 rounded-md max-w-3xl w-full text-center">
          <h2 className="text-red-600 font-bold text-md md:text-lg flex items-center justify-center gap-2">
            <FaBolt /> OFFER YOU CAN'T RESIST
          </h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">Buy Any Acrylic Wall Clock &</p>
          <p className="font-semibold text-gray-800 text-base md:text-lg">
            Get A <span className="text-blue-600 font-bold">Photo Fridge Magnet</span> Worth Rs.249/- For <span className="text-blue-700 font-extrabold">FREE!</span>
          </p>
        </div>

        {/* How to Order */}
        <div className="text-center space-y-4 w-full max-w-4xl">
          <h3 className="text-lg md:text-xl font-bold text-blue-600">HOW TO ORDER</h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-base font-medium">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</span>
              <span>Select Shape</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">2</span>
              <span>Upload Pic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">3</span>
              <span>Buy</span>
            </div>
          </div>
        </div>

        {/* Shape Selection Title */}
        <h3 className="text-lg md:text-xl font-bold text-blue-600 text-center">
          CHOOSE A SHAPE TO CUSTOMIZE
        </h3>

        {/* Filters */}
        {/* Filters */}
        <div className="bg-blue-50 rounded-xl shadow-md px-4 py-3 flex flex-wrap gap-3 justify-center text-gray-700 max-w-4xl w-full">
            <div className="flex items-center gap-2 font-semibold text-black">
                <FaFilter />
                <span>FILTERS</span>
            </div>

            {filters.map(({ label, icon }) => (
                <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition 
                    ${
                    activeFilter === label
                        ? "bg-blue-600 text-white"
                        : "hover:bg-white hover:shadow"
                    }`}
                >
                {icon}
                {label}
                </button>
            ))}
        </div>
  
        {/* Clock Designs Grid */}
        <div className="w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            {clockDesigns.map(clock => (
              <div key={clock.id} className="bg-gray-100 p-4 rounded-xl shadow-md flex flex-col items-center">
                <img 
                  src={clock.thumbnail} alt={clock.title}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h3>{clock.title}</h3>
                <Link
                  to={`/products/editor/${clock.id}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Start Design →
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ClockPage;
