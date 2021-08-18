import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../pages/_app";

export default function Item({ type, court, no, sys, reason, mainText }) {
  const router = useRouter();
  const { savedIds, setSavedIds } = useAppContext();
  const [isSaved, setIsSaved] = useState(false);
  const toggleSave = e => {
    e.stopPropagation();
    if (savedIds.includes(no)) {
      let newSavedIds = savedIds.filter(id => id !== no);
      setSavedIds(newSavedIds);
    } else {
      setSavedIds([...savedIds, no]);
    }
  };
  useEffect(() => {
    if (savedIds.includes(no)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
    localStorage.setItem("savedIds", JSON.stringify(savedIds));
  }, [savedIds]);
  return (
    <Link href="/results/[no]" as={`/results/${no}`}>
      <div className="item shadow px-5 py-5 bg-white w-full my-5 rounded-md cursor-pointer">
        <div className="flex justify-between">
          <div className={type === "判決" ? "type1" : "type2"}>
            <span>{type}</span>
          </div>
          <div
            onClick={toggleSave}
            className="rounded-lg bookmark-border p-1 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill={isSaved ? "#011f26" : "none"}
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
          <h1 className="text-black text-lg font-bold mb-2">
            {court} {no} {reason} {sys}{" "}
          </h1>
          <div className="text-gray-600 w-11/12">{mainText}</div>
        </div>
      </div>
    </Link>
  );
}
