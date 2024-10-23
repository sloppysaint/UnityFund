
import { motion } from 'framer-motion';

const ngos = [
  {
    id: 1,
    name: "Helping Hands",
    description: "Focused on health and education for underprivileged communities.",
    location: "New Delhi",
  },
  {
    id: 2,
    name: "Hope Foundation",
    description: "Supporting families with food and shelter.",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Green Earth Initiative",
    description: "Promoting environmental sustainability through tree plantations.",
    location: "Bangalore",
  },
  {
    id: 4,
    name: "Bright Future",
    description: "Providing education resources to rural areas.",
    location: "Chennai",
  },
  {
    id: 5,
    name: "Health Aid",
    description: "Delivering medical aid to remote areas.",
    location: "Chennai, India",
  },
  {
    id: 6,
    name: "Smile Foundation",
    description: "Ensuring Fair Opportunites to all women in the country.",
    location: "Banglore, India",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Volunteer = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div className="max-w-screen-xl mt-9 mx-auto">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Why Volunteer?
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Volunteering is a powerful way to contribute to society, build meaningful connections, and make a lasting impact. 
          Join our efforts to bring positive change by offering your time, skills, and dedication to help those in need.
        </motion.p>

        {/* NGO List Section */}
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
        >
          NGOs you can volunteer with:
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ngos.map((ngo, index) => (
            <motion.div
              key={ngo.id}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {ngo.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {ngo.description}
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{ngo.location}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Apply to Volunteer
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
