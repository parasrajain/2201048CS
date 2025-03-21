import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts?type=popular").then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="p-4 border rounded-lg shadow-md mb-4">
          <img src={`https://source.unsplash.com/400x200/?nature`} alt="Post" className="rounded-lg mb-2" />
          <p className="font-semibold">{post.content}</p>
          <p className="text-sm text-gray-500">{post.commentCount} Comments</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;

