import type { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mt-6 text-lg text-gray-100">
            Have questions? We’d love to hear from you. Reach out and we’ll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600">
            Email: <a href="mailto:support@freedigitalmenu.com" className="text-indigo-600 underline">support@freedigitalmenu.com</a>
          </p>
          <p className="mt-2 text-gray-600">Phone: +1 (000) 123-4567</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
