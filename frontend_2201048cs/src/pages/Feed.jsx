import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts?type=latest");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // Poll every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
      {posts.map(post => (
        <div key={post.id} className="p-4 border rounded-lg shadow-md mb-4">
          <img src={`https://source.unsplash.com/400x200/?random`} alt="Post" className="rounded-lg mb-2" />
          <p className="font-semibold">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;

