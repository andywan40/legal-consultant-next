import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useRouter } from "next/router";

export default function Item({ type, isFav, title, content }) {
  const router = useRouter();
  const handleFavIconClick = e => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={() => router.push("/page2")}
      className="px-4 py-3 bg-white w-full my-5 rounded-md cursor-pointer"
    >
      <div className="flex justify-between">
        <div
          className={
            type === "判決"
              ? "type1 rounded-lg text-white px-3 rounded-full flex items-center"
              : "type2 rounded-lg text-white px-3 rounded-full flex items-center"
          }
        >
          <span>{type}</span>
        </div>
        <div
          onClick={handleFavIconClick}
          className="rounded-lg border border-gray-500 p-1 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill={isFav ? "#4B6982" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <h1 className="text-black text-lg font-bold mb-2">{title}</h1>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
}
