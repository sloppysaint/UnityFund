
const causes = [
  {
    title: "Tayyari Kal Ki",
    description: "Aims at training & upskilling the youth between 18-32 years for employment and empowering them with a secure livelihood.",
    image: "./image7.jpg", 
  },
  {
    title: "Health Cannot Wait",
    description: "Realizing the need for accessible and quality healthcare for all, this campaign helps underprivileged sections.",
    image: "/image8.jpg",
  },
  {
    title: "Shiksha Na Ruke",
    description: "Helps children from difficult circumstances get back to school and restart their lives.",
    image: "/image9.jpeg",
  },
  {
    title: "She Can Fly",
    description: "An effort to empower girl children with quality education, proper nutrition, and health.",
    image: "/image9.avif",
  },
];

const CauseCard = ({ title, description, image }) => {
  return (
    <div className="dark:bg-gray-900   rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 ">
        <h3 className="font-bold dark:text-white  text-lg">{title}</h3>
        <p className="text-sm dark:text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

const CausesSection = () => {
  return (
    <div className=" dark:bg-black/50  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white ">Support a Cause</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((cause, index) => (
            <CauseCard key={index} {...cause} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CausesSection;
