import React from 'react';

const NotFound = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <div className="relative h-80 w-full mb-6">
          <h1 className="text-8xl font-bold absolute inset-0 flex items-center justify-center text-gray-800">404</h1>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
            }}
          ></div>
        </div>
        <div className="mt-6">
          <h3 className="text-3xl font-semibold">Look like you're lost</h3>
          <p className="text-gray-600 mb-6">The page you are looking for is not available!</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
          >
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
