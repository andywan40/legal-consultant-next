import React, { useState } from "react";
import ItemAccordion from "../components/ItemAccordion";
import ItemLink from "../components/ItemLink";
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
      <div className="grid grid-cols-8 h-screen max-h-screen w-full py-20 ">
        <div className="col-start-2 col-span-4 border-r border-t border-gray-400">
          <div className="pb-6 pr-5 overflow-auto h-75vh">
            <div className="flex justify-between py-5">
              <div className={type === "判決" ? "type1 py-1" : "type2 py-1"}>
                <span>{type}</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 inline-block rounded-lg bookmark-border p-1 rounded-full cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#011f26"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 inline-block rounded-lg bookmark-border p-1 rounded-full cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="#011f26"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setIsFav(!isFav)}
                  className="h-6 w-6 inline-block rounded-lg bookmark-border p-1 rounded-full cursor-pointer"
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
            <div className="bg-blue-100 h-full w-full">文件</div>
          </div>
        </div>
        <div className="col-start-6 col-span-2">
          <div className="p-6 overflow-auto border-t border-gray-400 h-35vh mb-10">
            <h1 className="title-color text-lg font-bold">歷審裁判</h1>
            <div className="mt-2">
              {accordions &&
                accordions.map((accordion, i) => (
                  <ItemLink key={i} title={1} content={1} />
                ))}
            </div>
          </div>
          <div className="p-6 overflow-auto h-35vh">
            <h1 className="title-color text-lg font-bold">相關條文</h1>
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
