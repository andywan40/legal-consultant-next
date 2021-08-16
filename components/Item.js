import React from "react";
import { useRouter } from "next/router";

export default function Item({ type, isFav, title, content }) {
  const router = useRouter();
  const handleFavIconClick = e => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={() => router.push("/page2")}
      className="item shadow px-5 py-5 bg-white w-full my-5 rounded-md cursor-pointer"
    >
      <div className="flex justify-between">
        <div className={type === "判決" ? "type1" : "type2"}>
          <span>{type}</span>
        </div>
        <div
          onClick={handleFavIconClick}
          className="rounded-lg bookmark-border p-1 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill={isFav ? "#011f26" : "none"}
            viewBox="0 0 24 24"
            stroke="#011f26"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <h1 className="text-black text-lg font-bold mb-2">{title}</h1>
        <div className="text-gray-600 w-11/12">{content}</div>
      </div>
    </div>
  );
}
