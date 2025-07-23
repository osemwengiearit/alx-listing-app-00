import React from 'react';
import Head from 'next/head';
import Pill from '@/components/ui/Pill';

const filters = [
  'Top Villa',
  'Self Checkin',
  'Free WiFi',
  'Mountain View',
  'Private Pool',
  'Pet Friendly',
  'Beachfront',
  '24h Checkin',
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta
          name="description"
          content="Find the best properties around the world"
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?villa,resort')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 md:px-10 py-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, idx) => (
            <Pill key={idx} label={filter} />
          ))}
        </div>
      </section>
    </>
  );
}
