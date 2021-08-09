import React, { useState } from "react";
import Item from "../components/Item";
import ItemAccordion from "../components/ItemAccordion";
import Page from "../components/Page";

export default function page1() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [accordions, setAccordions] = useState([
    1, 2, 3, 4, 5, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  ]);
  return (
    <Page>
      <div className="grid grid-cols-12 max-h-screen w-full py-20 ">
        <div className="col-start-3 col-span-6 border-r border-gray-400">
          <div className="flex justify-center border-b border-gray-400 pb-6 mx-10 h-8vh">
            <button className="border border-gray-400 rounded-lg bg-white hover:bg-gray-100 text-black py-5 px-10 mx-3 rounded-full flex items-center">
              <span>判決</span>
            </button>
            <button className="border border-gray-400 rounded-lg bg-white hover:bg-gray-100 text-black py-5 px-10 mx-3 rounded-full flex items-center">
              <span>函釋</span>
            </button>
          </div>
          <div className="pb-6 mx-10 overflow-auto h-75vh">
            {items &&
              items.map((item, i) => (
                <Item key={i} type="判決" isFav={false} />
              ))}
          </div>
        </div>
        <div className="col-start-9 col-span-3">
          <div className="flex fkex-col items-center justify-center border-b border-gray-400 pb-6 h-8vh"></div>
          <div className="p-5 overflow-auto h-75vh">
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
