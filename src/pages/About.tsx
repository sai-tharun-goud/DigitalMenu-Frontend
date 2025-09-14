import type { FC } from "react";

const About: FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            About Our Free Digital Menu
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            We believe every restaurant deserves the power of digital menus —
            without the cost. That’s why our platform is 100% free, forever.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-7">
            To empower restaurants of all sizes by giving them access to a simple,
            modern, and free solution for managing their menus digitally.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
