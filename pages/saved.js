import React, { useState, useEffect } from "react";
import { useAppContext } from "./_app";
import Item from "../components/Item";
import Page from "../components/Page";

export default function saved() {
  const { items, savedIds } = useAppContext();
  const [savedItems, setSavedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    let newSavedItems = [];
    items.forEach(item => {
      if (savedIds.includes(item.no)) {
        newSavedItems.push(item);
      }
    });
    setSavedItems(newSavedItems);
  }, []);

  useEffect(() => {
    if (selected === "all") {
      setFilteredItems(savedItems);
    } else if (selected === "judgement") {
      let newFilteredItems = savedItems.filter(item => item.type === "判決");
      setFilteredItems(newFilteredItems);
    } else if (selected === "explanation") {
      let newFilteredItems = savedItems.filter(item => item.type === "函釋");
      setFilteredItems(newFilteredItems);
    } else {
      setFilteredItems(savedItems);
    }
  }, [selected, savedItems]);

  return (
    <Page>
      <div className="grid grid-cols-8 max-h-screen w-full py-20 ">
        <div className="col-start-2 col-span-6">
          <div className="flex justify-center border-b border-gray-400 pb-6 h-8vh">
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
          <div className="pb-6 overflow-auto h-75vh">
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
      </div>
    </Page>
  );
}
