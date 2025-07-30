import React from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-24">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Check-in</label>
        <input type="date" className="border p-2 w-full mt-2 rounded-md" />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Check-out</label>
        <input type="date" className="border p-2 w-full mt-2 rounded-md" />
      </div>

      {/* Total Payment */}
      <div className="mt-4 text-lg">
        <p>
          Total payment: <strong>${price * 7}</strong>
        </p>
      </div>

      {/* Reserve Button */}
      <button className="mt-6 w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
