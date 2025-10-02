import React from "react";
import { useParams } from "react-router";
import Villas from "./Villas";

// Define villa type (adjust based on your villas data structure)
interface Villa {
  id: number;
  name: string;
  image: string;
  location: string;
  bedrooms: number;
  guests: number;
  bathrooms: number;
  squareMeter: number;
}

const SingleVilla: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  // Find villa by ID
  const filteredVilla = Villas.find((villa: Villa) => villa.id === numericId);

  // Handle not found case
  if (!filteredVilla) {
    return (
      <section className="py-10 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <h3 className="text-2xl font-bold text-red-600">
          Villa not found ❌
        </h3>
      </section>
    );
  }

  return (
    <section
      id="singleVilla"
      className="py-10 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {filteredVilla.name}
        </h3>

        {/* Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Villa Image */}
          <div className="col-span-2">
            <img
              src={filteredVilla.image}
              alt={filteredVilla.name}
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Other Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/landing.jpg"
              alt="villa"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
            <img
              src="/people.jpg"
              alt="villa"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
            <img
              src="/people2.jpg"
              alt="villa"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
            <img
              src="/villa10.jpg"
              alt="villa"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
          </div>
        </div>

        {/* Location Info */}
        <h4 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
          {filteredVilla.location}
        </h4>

        <p className="text-gray-600 mb-6">
          {filteredVilla.bedrooms} Bedrooms / {filteredVilla.guests} Guests /{" "}
          {filteredVilla.bathrooms} Bathrooms / {filteredVilla.squareMeter} sq.ft
          Area
        </p>

        {/* Check In & Out */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-8">
          <h5 className="text-lg font-medium text-gray-700">
            Check In:{" "}
            <span className="font-semibold text-green-600">9:00 AM</span>
          </h5>
          <h5 className="text-lg font-medium text-gray-700">
            Check Out:{" "}
            <span className="font-semibold text-red-600">11:00 PM</span>
          </h5>
        </div>

        {/* Location Section */}
        <div className="mt-8">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Location</h4>
          <iframe
            src=" "
            className="w-full h-[400px] rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SingleVilla;
