import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-7/12 mb-6 lg:mb-0">
                <h3 className="text-3xl font-extrabold">
                  Got Questions or Need Assistance?
                </h3>
                <p className="mt-4 text-gray-200 dark:text-gray-300">
                  We’re here to help! Reach out to us for any inquiries, support, or to discuss your next project. Our team is ready to assist you with professional and prompt service.
                </p>
              </div>
              <div className="lg:w-5/12 text-center lg:text-right">
                <a
                  href="#"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-cover bg-no-repeat pt-12 dark:bg-gray-800">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <img src="logo.png" alt="Logo" className="h-20" />
              </div>
              <p className="text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                We create solutions that are designed to drive your business forward. Our focus is on delivering value and innovation in everything we do.
              </p>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                  >
                    <FaFacebookF size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                  >
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-4">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaPhoneAlt className="text-yellow-500 mr-4" />
                  <div>
                    <p>
                      <a
                        href="tel:+919246147999"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                      >
                        1800-121-3637
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+919246147999"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                      >
                        +91 924-614-7999
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-yellow-500 mr-4" />
                  <div>
                    <p>
                      <a
                        href="mailto:info@deneb.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                      >
                        info@deneb.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:services@deneb.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                      >
                        services@deneb.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-yellow-500 mr-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    125, Park Street Avenue, Brooklyn,{" "}
                    <span className="block">New York.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 dark:bg-gray-700 text-center py-6 mt-12">
          <p className="text-gray-900 dark:text-gray-200">
            &copy; 2024 All rights reserved. Developed by [CodeCrafter].
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
