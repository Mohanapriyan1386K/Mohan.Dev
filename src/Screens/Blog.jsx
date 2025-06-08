import React from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import blogData from "../Utility/blogData"; // Adjust the path if needed

function Blog() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Container>
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
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
                className="mt-4 text-blue-600 hover:underline"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Blog;
