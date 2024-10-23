import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Health Camp for Underprivileged",
    description: "A health camp providing free medical checkups and treatments.",
    date: "October 28, 2024",
    location: "Mumbai, India",
  },
  {
    id: 2,
    title: "Educational Seminar for Children",
    description: "An initiative to provide education resources for children in rural areas.",
    date: "November 12, 2024",
    location: "Delhi, India",
  },
  {
    id: 3,
    title: "Food Distribution Drive",
    description: "A food distribution drive aimed at feeding families in need.",
    date: "November 25, 2024",
    location: "Bangalore, India",
  },
  {
    id: 4,
    title: "Tree Plantation Event",
    description: "A community-driven tree plantation event for a greener future.",
    date: "December 5, 2024",
    location: "Chennai, India",
  },
  {
    id: 5,
    title: "Women's Empowerment Seminar",
    description: "A seminar focused on empowering women through education and skill development.",
    date: "December 2, 2024",
    location: "Pune",
  },
  {
    id: 6,
    title: "Winter Clothing Drive",
    description: "A drive to collect and distribute winter clothing to the homeless and underprivileged.",
    date: "December 15, 2024",
    location: "Kolkata",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Events = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-8"
        >
          Events Organized by NGOs
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
              }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 space-y-4"
            >
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
              <div className="text-sm text-gray-500">
                <span>Date: {event.date}</span> <br />
                <span>Location: {event.location}</span>
              </div>
              <button className="btn-primary w-full mt-4">Learn More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
