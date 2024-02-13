import { create } from "zustand";

export const setPosts = create((set) => ({
  posts: [
    {
      title: "asfund",
    },
    {
      title: "uzair",
    },
  ],
  addPost: (post) => {
    set((state) => {
      return { posts: [...state.posts, post] };
    });
  },

  deletePost: (index) => {
    set((state) => {
      return { posts: state.posts.filter((_, i) => i !== index) };
    });
  },
}));
