import React from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import blogData from "../Utility/blogData"; // Adjust the path if needed
import { motion } from "framer-motion";
function Blog() {
  const navigate = useNavigate();

  return (
    <div className="p-6  min-h-screen">
      <Container>
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogData.map((blog,index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
         
              className="bg-white rounded-lg shadow-2xl p-4 hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.imgurl}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700">{blog.content}</p>
              <button
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="mt-4 text-blue-600 hover:underline cursor-pointer"
              >
                Read More →
              </button>
           </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Blog;
