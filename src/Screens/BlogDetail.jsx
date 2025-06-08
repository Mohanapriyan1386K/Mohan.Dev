import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogData from "../Utility/blogData"; // Adjust the path if needed

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div className="p-6 text-red-500">Blog not found</div>;
  }

  return (
    <div className="p-6 mt-[1px] min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.imgurl}
        alt={blog.title}
        className="w-full h-64 object-top rounded-lg mb-4"
      />
      <p className="text-lg leading-7">{blog.fullContent}</p>
    </div>
  );
}

export default BlogDetail;
