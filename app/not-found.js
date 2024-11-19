import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  // Define the background image style as a separate object
  const backgroundImageStyle = {
    backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '24rem', // Equivalent to 'h-96' in Tailwind CSS
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white font-serif text-center">
      {/* Background Image */}
      <div className="h-[150px] w-[400px]" style={backgroundImageStyle}></div>

      {/* Content Box */}
      <div className="">
        <h1 className="text-center text-8xl">404</h1>
        <h3 className="text-4xl  text-green-600 font-bold">Looks like you&apos;re lost</h3>
        <p className="text-2xl text-yellow-500 mt-4">The page you are looking for is not available!</p>
        <Link href="/">
          <p className="mt-6 inline-block px-5 py-2 text-white bg-green-600 rounded hover:bg-green-700">
            Go to Home
          </p>
        </Link>
      </div>
    </section>
  );
}
