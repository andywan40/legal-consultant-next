import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useRouter } from "next/router";

export default function Item({ type, isFav, title, content }) {
  const router = useRouter();
  type = "判決";
  title = "臺東地方法院  110,易,70  竊盜  刑事  判決";
  content =
    "想要提神，又因為遇到之前有在一起吸的，才會吸食。福將公司的副總也知道我工作很拼。我這次是徹底悔悟，出監後不再吸毒，就不會再偷竊了，因為這樣很丟臉。我有1個小孩已經嫁人，我還沒有進來之前都會去看她，我也沒讓小孩知道我進來服刑。我不吸毒的話都還可以生...";
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
        <div className="rounded-lg border border-gray-500 p-1 rounded-full cursor-pointer">
          <FavoriteIcon className={isFav ? "text-blue-600" : ""} />
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <h1 className="text-black text-lg font-bold mb-2">{title}</h1>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
}
