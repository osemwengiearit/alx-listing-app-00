import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left: Details */}
        <div className="lg:w-2/3">
          {/* Description */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p>{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <ul className="flex flex-wrap space-x-4">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md mt-2">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Booking Section */}
        <div className="lg:w-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
