"use client";
import { setPosts } from "@/titles/store";
import { useState } from "react";

export default function Home() {
  const { posts, addPost, deletePost, editPost } = setPosts();
  const [post, setPost] = useState("");
  const [edit, setEdit] = useState(false);
  const [editedPost, setEditedPost] = useState("");
  const [editedPostIndex, setEditedPostIndex] = useState("");

  const handleAddPost = () => {
    const newPost = {
      title: post,
    };
    addPost(newPost);
    setPost("");
  };
  const handleDeletePost = (index) => {
    deletePost(index);
  };
  const handleEditPost = (post, index) => {
    setPost(post.title);
    setEdit(true);
    setEditedPost(post);
    setEditedPostIndex(index);
  };
  console.log(editedPost, editedPostIndex);
  const editPostHandle = () => {
    const update = { ...editedPost, title: post };
    editPost(update, editedPostIndex);
    setPost("");
    setEdit(false);
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
        {edit ? (
          <button
            onClick={(e) => editPostHandle(e.preventDefault())}
            className="flex items-center text-center p-2 px-5 bg-blue-300"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={(e) => handleAddPost(e.preventDefault())}
            className="flex items-center text-center p-2 px-5 bg-blue-300"
          >
            Add
          </button>
        )}
      </form>
      <div className="flex flex-col w-[500px]  items-center justify-center">
        {posts?.map((post, index) => (
          <div
            key={index}
            className=" p-10 text-white  border-solid border-2 border-blue-300 "
          >
            <h2>{post?.title}</h2>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditPost(post, index)}
                className="flex items-center text-center p-2  bg-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeletePost(index)}
                className="flex items-center text-center p-2  bg-blue-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
