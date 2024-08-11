import React from 'react';
import BlogCard from './BlogCard';

// Correctly reference the image paths
const BlogData = [
  {
    img: '/image4.jpg',
    title: 'The Power of Community Support',
    description: "Discover how collective efforts are transforming lives in underprivileged communities...",
    date: "August 5, 2023",
    writer: "Anonymous",
  },
  {
    img: '/image5.jpg',
    title: 'Education as a Catalyst for Change',
    description: "Explore the role of education in empowering individuals and fostering sustainable growth within communities...",
    date: "July 28, 2024",
    writer: "Saksham Kapoor",
  },
  {
    img: '/image6.jpg',
    title: 'Sustainable Development: A Path Forward',
    description: "Learn about sustainable practices that are making a long-term impact in resource-limited regions...",
    date: "August 12, 2023",
    writer: "Chetanya Rastogi",
  },
];

const BlogPage = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <div className="container">
        <h1 className='mb-5 mt-8  pl-2 text-center text-3xl font-bold'>
          Our Latest Blogs
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {BlogData.map((blog) => (
            <BlogCard
              key={blog.title}
              img={blog.img}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              writer={blog.writer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
