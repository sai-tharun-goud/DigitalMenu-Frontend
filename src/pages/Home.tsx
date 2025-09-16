// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:gap-x-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
              Free Digital Menu for Every Restaurant
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Create your menu, generate a QR code, and share it instantly —
              all free, forever.
            </p>
            <div className="mt-8 flex gap-x-4">
              <Link
                to="/login"
                className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-md hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className="rounded-lg border border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:flex-shrink-0">
            <img
              src="https://dummyimage.com/500x400/4f46e5/ffffff&text=QR+Code+Preview"
              alt="QR Code Preview"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We make going digital simple and free for restaurants everywhere.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600">QR Codes</h3>
              <p className="mt-3 text-gray-600">
                Generate dynamic QR codes for your restaurant’s menu in one
                click.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600">
                Instant Updates
              </h3>
              <p className="mt-3 text-gray-600">
                Update your menu anytime — changes are live instantly.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-600">
                Free Forever
              </h3>
              <p className="mt-3 text-gray-600">
                No subscriptions, no hidden fees. Our app is always free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Free Digital Menu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
