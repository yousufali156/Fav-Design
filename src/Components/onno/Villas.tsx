import React from "react";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router";

// Define type for villa
interface Villa {
  id: number;
  name: string;
  image: string;
  location: string;
  category: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  squareMeter: number;
  dailyRent: number;
}

const Villas: React.FC = () => {
  return (
    <section id="allVillas" className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ALL VILLAS
          </h1>
          <p className="text-gray-500 mt-2">{Villas.length} Properties</p>
        </div>

        {/* Villas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Villas.map((villa: Villa) => (
            <Link
              to={`/villa/${villa.id}`}
              key={villa.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-white/80 text-sm font-medium px-3 py-1 rounded-md shadow-sm">
                  {villa.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <span>{villa.location}</span>
                  <RxDot className="mx-1" />
                  <span>{villa.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-1">
                  {villa.name}
                </h3>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-3 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <IoIosPeople className="text-blue-500" />
                    <span>{villa.guests}</span>
                    <span>Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBed className="text-purple-500" />
                    <span>{villa.bedrooms}</span>
                    <span>Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiArea className="text-green-500" />
                    <span>{villa.squareMeter}</span>
                    <span>Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBath className="text-pink-500" />
                    <span>{villa.bathrooms}</span>
                    <span>Baths</span>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="mt-5">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md">
                    From Rs.{villa.dailyRent} / Day
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Villas;
