import { useState, useEffect } from "react";
import Page from "../components/Page";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState(() =>
    JSON.parse(localStorage.getItem("text"))
  );
  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  const [selected, setSelected] = useState("civil");
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSearch = e => {
    alert(selected);
    router.push("/page1");
  };
  return (
    <Page>
      <div className="text-center flex flex-col w-4/6 p-24 min-h-screen">
        <h1 className="text-black text-xl ">案例事實</h1>
        <hr className="border hr mt-3"></hr>
        <h6 className="text-black mt-8">請選擇法律類別</h6>
        <div className="mt-3">
          <button
            id="civil"
            onClick={() => setSelected("civil")}
            className={
              selected === "civil"
                ? "border border-gray-400 rounded-lg black-background hover:bg-black text-white py-5 px-10 mx-3 rounded-full"
                : "border border-gray-400 rounded-lg bg-white hover:bg-gray-100 text-black py-5 px-10 mx-3 rounded-full"
            }
          >
            民事
          </button>
          <button
            id="criminal"
            onClick={() => setSelected("criminal")}
            className={
              selected === "criminal"
                ? "border border-gray-400 rounded-lg black-background hover:bg-black text-white py-5 px-10 mx-3 rounded-full"
                : "border border-gray-400 rounded-lg bg-white hover:bg-gray-100 text-black py-5 px-10 mx-3 rounded-full"
            }
          >
            刑事
          </button>
          <button
            id="administrative"
            onClick={() => setSelected("administrative")}
            className={
              selected === "administrative"
                ? "border border-gray-400 rounded-lg black-background hover:bg-black text-white py-5 px-10 mx-3 rounded-full"
                : "border border-gray-400 rounded-lg bg-white hover:bg-gray-100 text-black py-5 px-10 mx-3 rounded-full"
            }
          >
            行政
          </button>
        </div>
        <div className="border border-md border-gray-400 text-gray-600 mt-8 table h-full">
          <textarea
            id="text"
            value={text}
            onChange={handleChange}
            className="outline-none w-full h-full table resize-none p-5 main-background"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSearch}
            className="border border-black black-background hover:bg-black rounded-lg text-white py-3 px-6 rounded-full w-1/5"
          >
            搜尋
            <SearchIcon className="inline-block w-1/2 h-1/2" />
          </button>
        </div>
      </div>
    </Page>
  );
}
