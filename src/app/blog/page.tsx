"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Post {
  id: number,
  title: string,
  body: string,
  reactions: {
    likes: number,
    dislikes: number
  }


}
const PostApi = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const FetchPost = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      //   console.log(data)
      setPosts(data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    FetchPost();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 ml-5 flex justify-start w-full">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
          ⬅ Home
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6 mt-6 text-pink-600 items-center">Latest Posts</h2>
      {posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl cursor-pointer">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.body.substring(0, 100)}...</p>
              <p className="text-pink-600">
                👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Loading posts...</p>
      )}
    </div>
  );
};

export default PostApi;
