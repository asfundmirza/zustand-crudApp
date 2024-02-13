"use client";
import { setPosts } from "@/titles/store";
import { useState } from "react";

export default function Home() {
  const { posts, addPost } = setPosts();
  const [post, setPost] = useState("");

  const handleAddPost = () => {
    const newPost = {
      title: post,
    };
    addPost(newPost);
    setPost("");
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-5  p-24">
      <h1 className=" text-white">Welcome to Zustand crud APP</h1>
      <form>
        <input
          type="text"
          className="flex p-3 w-full border-none "
          placeholder="enter title"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <button
          onClick={(e) => handleAddPost(e.preventDefault())}
          className="flex items-center text-center p-2 px-5 bg-blue-300"
        >
          Add
        </button>
      </form>
      <div className="flex flex-col w-[500px]  items-center justify-center">
        {posts?.map((post, index) => (
          <div
            key={index}
            className=" p-10 text-white  border-solid border-2 border-blue-300 "
          >
            <h2>{post?.title}</h2>
            <div className="flex gap-2">
              <button className="flex items-center text-center p-2  bg-blue-500">
                Add
              </button>
              <button className="flex items-center text-center p-2  bg-blue-500">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
