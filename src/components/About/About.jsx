
import { motion } from 'framer-motion';
import aboutUsImage from '/image14.jpg'; 
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10  px-5">
      <div className="container mx-auto space-y-12 mt-11 ">
        {/* Heading Section */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
        >
          About Us
        </motion.h1>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={aboutUsImage}
            alt="About Us"
            className="w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* About Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center"
        >
          <p>
            Welcome to Unity Fund, where we work tirelessly to bridge the gap between those in need and those with the
            means to help. Our platform brings together communities, volunteers, and NGOs to make a real impact in
            society. With your support, we aim to uplift underprivileged communities through educational programs,
            healthcare aid, environmental initiatives, and more.
          </p>
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="text-lg md:text-xl text-gray-900 dark:text-white">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Mission</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              We strive to create a better world by connecting generous donors and passionate volunteers with NGOs that
              focus on education, healthcare, environmental conservation, and social justice.
            </p>
          </div>
          <div className="text-lg md:text-xl text-gray-900 dark:text-white">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Vision</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Our vision is to foster a global society where everyone has access to essential services, regardless of
              their background or financial situation. Together, we can make the world a better place.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-xl mx-auto space-y-4 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Email: info@unityfund.org</p>
          <p className="text-lg text-gray-700 dark:text-gray-300">Phone: +91 9999-999-999</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
