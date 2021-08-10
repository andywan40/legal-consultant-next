import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ItemAccordion from "../components/ItemAccordion";
import Page from "../components/Page";

export default function page2() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [accordions, setAccordions] = useState([
    1, 2, 3, 4, 5, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  ]);
  const type = "判決";
  const [isFav, setIsFav] = useState(false);
  return (
    <Page>
      <div className="grid grid-cols-12 max-h-screen w-full py-20 ">
        <div className="col-start-3 col-span-6 border-r border-t border-gray-400">
          <div className="pb-6 mr-5 overflow-auto h-75vh">
            <div className="flex justify-between py-5">
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
                onClick={() => setIsFav(!isFav)}
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
            <div className="bg-blue-100 h-full w-full">文件</div>
          </div>
        </div>
        <div className="col-start-9 col-span-3">
          <div className="p-6 overflow-auto border-t border-gray-400 h-75vh">
            <h1 className="text-blue-800 text-lg font-bold">相關條文</h1>
            <div className="mt-2">
              {accordions &&
                accordions.map((accordion, i) => (
                  <ItemAccordion key={i} title={1} content={1} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
