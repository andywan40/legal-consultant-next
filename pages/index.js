import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@material-ui/icons/Search";
import { useAppContext } from "./_app";
import Page from "../components/Page";
import { data } from "../helpers/data";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const { setItems } = useAppContext();
  const [text, setText] = useState(
    () => JSON.parse(localStorage.getItem("text")) || ""
  );
  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  const [selected, setSelected] = useState("civil");
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSearch = e => {
    if (!text.trim()) {
      alert("請輸入案例事實");
    } else {
      //api call
      // axios
      //   .post("http://140.112.107.1:5000/", { text })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
      setItems(data);
      localStorage.setItem("items", JSON.stringify(data));
      router.push("/results");
    }
  };
  return (
    <Page>
      <div className="text-center flex flex-col w-4/6 p-24 pt-16 min-h-screen">
        <h1 className="black-font font-bold text-xl">案例事實</h1>
        <hr className="border hr mt-3"></hr>
        <h6 className="text-black mt-10">請選擇法律類別</h6>
        <div className="mt-5">
          <button
            id="civil"
            onClick={() => setSelected("civil")}
            className={
              selected === "civil"
                ? "category-button-selected"
                : "category-button"
            }
          >
            民事
          </button>
          <button
            id="criminal"
            onClick={() => setSelected("criminal")}
            className={
              selected === "criminal"
                ? "category-button-selected"
                : "category-button"
            }
          >
            刑事
          </button>
          <button
            id="administrative"
            onClick={() => setSelected("administrative")}
            className={
              selected === "administrative"
                ? "category-button-selected"
                : "category-button"
            }
          >
            行政
          </button>
        </div>
        <div className="mt-8 table h-4/6">
          <textarea
            id="text"
            placeholder="請輸入"
            value={text}
            onChange={handleChange}
            className="main-background textarea"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSearch}
            className="search-button border border-2 font-bold rounded-lg py-3 px-6 rounded-full w-1/5"
          >
            搜尋
            <SearchIcon className="inline-block w-1/2 h-1/2" />
          </button>
        </div>
      </div>
    </Page>
  );
}
