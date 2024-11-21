import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogPosts = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  let cnt = 1;
  const {blogData} = useContext(AuthContext)
  console.log(blogData);

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500
               to-purple-400  mb-3">Blog Posts</h2>
        <p className="text-center text-gray-600 mb-8">
          One inspiring story is worth traveling. Discover more about local food,
          tradition, and history. Read the stories that make you want to travel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {blogData.map((blog, idx) => (
            <div key={blog.id} className="bg-white shadow-md  rounded-lg overflow-hidden"  data-aos={idx % 2 === 0 ? "fade-right":"fade-left"}>
              <img src="https://i.ibb.co.com/FB05THp/deer-3673017-1280.jpg" alt={blog.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
               
                <div className="text-gray-500 text-sm flex justify-between items-center pb-7 pt-2">
                  <p>{blog.description.substring(0, 100)}... <Link to={`/blog/${blog.id}`} className="text-blue-500  font-semibold underline ">Read More</Link></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
