"use client";
import { setTitles } from "@/titles/store";

export default function Home() {
  const { titles, bears } = setTitles();
  return (
    <main className="flex min-h-screen flex-col items-center gap-5  p-24">
      <h1 className=" text-white">Welcome to Zustand crud APP</h1>
      <form>
        <input
          type="text"
          className="flex p-3 w-full border-none "
          placeholder="enter title"
        />
        <button className="flex items-center text-center p-2 px-5 bg-blue-300">
          Add
        </button>
      </form>
      <div className="flex flex-col w-[500px]  items-center justify-center">
        {titles?.map((title) => (
          <div className=" p-10 text-white  border-solid border-2 border-blue-300 ">
            <h2>{title?.title}</h2>
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
