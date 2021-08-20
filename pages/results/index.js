import React, { useState, useEffect } from "react";
import { useAppContext } from "../_app";
import Item from "../../components/Item";
import ItemAccordion from "../../components/ItemAccordion";
import Page from "../../components/Page";

export default function results() {
  const { items, potentialLaws } = useAppContext();
  const [filteredItems, setFilteredItems] = useState(items);
  const [selected, setSelected] = useState("all");
  useEffect(() => {
    if (selected === "all") {
      setFilteredItems(items);
    } else if (selected === "judgement") {
      let newFilteredItems = items.filter(item => item.type === "判決");
      setFilteredItems(newFilteredItems);
    } else if (selected === "explanation") {
      let newFilteredItems = items.filter(item => item.type === "函釋");
      setFilteredItems(newFilteredItems);
    } else {
      setFilteredItems(items);
    }
  }, [selected, items]);

  return (
    <Page>
      <div className="grid grid-cols-8 max-h-screen w-full py-20 ">
        <div className="col-start-2 col-span-4 border-r border-gray-400">
          <div className="flex justify-center border-b border-gray-400 pb-6 mr-5 h-8vh">
            <button
              id="all"
              onClick={() => setSelected("all")}
              className={
                selected === "all"
                  ? "category-button-selected flex items-center"
                  : "category-button flex items-center"
              }
            >
              全部
            </button>
            <button
              id="judgement"
              onClick={() => setSelected("judgement")}
              className={
                selected === "judgement"
                  ? "category-button-selected flex items-center"
                  : "category-button flex items-center"
              }
            >
              判決
            </button>
            <button
              id="explanation"
              onClick={() => setSelected("explanation")}
              className={
                selected === "explanation"
                  ? "category-button-selected flex items-center"
                  : "category-button flex items-center"
              }
            >
              函釋
            </button>
          </div>
          <div className="pb-6 pr-10 overflow-auto h-75vh">
            {filteredItems.length !== 0 ? (
              filteredItems.map(item => (
                <Item
                  key={item.no}
                  type={item.type}
                  court={item.court}
                  no={item.no}
                  sys={item.sys}
                  reason={item.reason}
                  mainText={item.mainText}
                />
              ))
            ) : (
              <h1 className="text-center text-black text-xl mt-10">無資料</h1>
            )}
          </div>
        </div>
        <div className="col-start-6 col-span-2">
          <div className="flex flex-col items-center justify-center border-b border-gray-400 pb-6 h-8vh ml-10"></div>
          <div className="pl-10 py-10 overflow-auto h-75vh">
            <h1 className="title-color text-lg font-bold">相關條文</h1>
            <div className="mt-2">
              {potentialLaws &&
                potentialLaws.map((law, i) => (
                  <ItemAccordion
                    key={i}
                    title={law.title}
                    content={law.content}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
