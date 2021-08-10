import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import ItemAccordion from "../components/ItemAccordion";
import Page from "../components/Page";

export default function page1() {
  const [items, setItems] = useState([
    {
      type: "判決",
      title: "臺東地方法院  110,易,70  竊盜  刑事  判決",
      content:
        "想要提神，又因為遇到之前有在一起吸的，才會吸食。福將公司的副總也知道我工作很拼。我這次是徹底悔悟，出監後不再吸毒，就不會再偷竊了，因為這樣很丟臉。我有1個小孩已經嫁人，我還沒有進來之前都會去看她，我也沒讓小孩知道我進來服刑。我不吸毒的話都還可以生...",
      isFav: false,
    },
    {
      type: "判決",
      title: "臺東地方法院  110,易,70  竊盜  刑事  判決",
      content:
        "想要提神，又因為遇到之前有在一起吸的，才會吸食。福將公司的副總也知道我工作很拼。我這次是徹底悔悟，出監後不再吸毒，就不會再偷竊了，因為這樣很丟臉。我有1個小孩已經嫁人，我還沒有進來之前都會去看她，我也沒讓小孩知道我進來服刑。我不吸毒的話都還可以生...",
      isFav: true,
    },
    {
      type: "函釋",
      title: "臺東地方法院  110,易,70  竊盜  刑事  判決",
      content:
        "想要提神，又因為遇到之前有在一起吸的，才會吸食。福將公司的副總也知道我工作很拼。我這次是徹底悔悟，出監後不再吸毒，就不會再偷竊了，因為這樣很丟臉。我有1個小孩已經嫁人，我還沒有進來之前都會去看她，我也沒讓小孩知道我進來服刑。我不吸毒的話都還可以生...",
      isFav: true,
    },
    {
      type: "判決",
      title: "臺東地方法院  110,易,70  竊盜  刑事  判決",
      content:
        "想要提神，又因為遇到之前有在一起吸的，才會吸食。福將公司的副總也知道我工作很拼。我這次是徹底悔悟，出監後不再吸毒，就不會再偷竊了，因為這樣很丟臉。我有1個小孩已經嫁人，我還沒有進來之前都會去看她，我也沒讓小孩知道我進來服刑。我不吸毒的話都還可以生...",
      isFav: false,
    },
    {
      type: "函釋",
      title: "臺東地方法院  110,易,70  竊盜  刑事  判決",
      content:
        "想要提神，又因為遇到之前有在一起吸的，才會吸食。福將公司的副總也知道我工作很拼。我這次是徹底悔悟，出監後不再吸毒，就不會再偷竊了，因為這樣很丟臉。我有1個小孩已經嫁人，我還沒有進來之前都會去看她，我也沒讓小孩知道我進來服刑。我不吸毒的話都還可以生...",
      isFav: false,
    },
    {
      type: "判決",
      title: "臺東地方法院  110,易,70  竊盜  刑事  判決",
      content:
        "想要提神，又因為遇到之前有在一起吸的，才會吸食。福將公司的副總也知道我工作很拼。我這次是徹底悔悟，出監後不再吸毒，就不會再偷竊了，因為這樣很丟臉。我有1個小孩已經嫁人，我還沒有進來之前都會去看她，我也沒讓小孩知道我進來服刑。我不吸毒的話都還可以生...",
      isFav: false,
    },
  ]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [accordions, setAccordions] = useState([
    1, 2, 3, 4, 5, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  ]);

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
  }, [selected]);

  return (
    <Page>
      <div className="grid grid-cols-12 max-h-screen w-full py-20 ">
        <div className="col-start-3 col-span-6 border-r border-gray-400">
          <div className="flex justify-center border-b border-gray-400 pb-6 mx-10 h-8vh">
            <button
              id="all"
              onClick={() => setSelected("all")}
              className={
                selected === "all"
                  ? "border border-gray-400 rounded-lg black-background hover:bg-black text-white py-5 px-10 mx-3 rounded-full flex items-center"
                  : "border border-gray-400 rounded-lg bg-white hover:bg-gray-100 text-black py-5 px-10 mx-3 rounded-full flex items-center"
              }
            >
              <span>全部</span>
            </button>
            <button
              id="judgement"
              onClick={() => setSelected("judgement")}
              className={
                selected === "judgement"
                  ? "border border-gray-400 rounded-lg black-background hover:bg-black text-white py-5 px-10 mx-3 rounded-full flex items-center"
                  : "border border-gray-400 rounded-lg bg-white hover:bg-gray-100 text-black py-5 px-10 mx-3 rounded-full flex items-center"
              }
            >
              <span>判決</span>
            </button>
            <button
              id="explanation"
              onClick={() => setSelected("explanation")}
              className={
                selected === "explanation"
                  ? "border border-gray-400 rounded-lg black-background hover:bg-black text-white py-5 px-10 mx-3 rounded-full flex items-center"
                  : "border border-gray-400 rounded-lg bg-white hover:bg-gray-100 text-black py-5 px-10 mx-3 rounded-full flex items-center"
              }
            >
              <span>函釋</span>
            </button>
          </div>
          <div className="pb-6 mx-10 overflow-auto h-75vh">
            {filteredItems &&
              filteredItems.map((item, i) => (
                <Item
                  key={i}
                  type={item.type}
                  title={item.title}
                  content={item.content}
                  isFav={item.isFav}
                />
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
