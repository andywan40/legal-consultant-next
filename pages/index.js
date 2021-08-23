import { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import { useAppContext } from "./_app";
import Page from "../components/Page";
import { data } from "../helpers/data";

export default function Home() {
  const router = useRouter();
  const { setItems, setPotentialLaws } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState(
    () => JSON.parse(localStorage.getItem("text")) || ""
  );
  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  const [selected, setSelected] = useState("criminal");
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSearch = e => {
    if (!text.trim()) {
      alert("請輸入案例事實");
    } else {
      setIsLoading(true);
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      //api call
      axios
        .post(`http://140.112.107.1:5000/`, qs.stringify({ text }), {
          headers: headers,
        })
        .then(res => {
          console.log(res);
          setPotentialLaws(res.data[0]);
          setItems(res.data[1]);
          localStorage.setItem("items", JSON.stringify(res.data[1]));
          localStorage.setItem("potentialLaws", JSON.stringify(res.data[0]));
          router.push("/results");
          //setIsLoading(false);
        })
        .catch(e => {
          console.log(e);
          // alert("錯誤，稍後再試");
          setItems(data);
          localStorage.setItem("items", JSON.stringify(data));
          setPotentialLaws([
            {
              title: 1,
              content: 1,
            },
            {
              title: 1,
              content: 1,
            },
            {
              title: 1,
              content: 1,
            },
            {
              title: 1,
              content: 1,
            },
            {
              title: 1,
              content: 1,
            },
          ]);
          setTimeout(() => {
            router.push("/results");
            //setIsLoading(false);
          }, 5000);
        });
    }
  };
  return (
    <Page>
      {!isLoading ? (
        <div className="text-center flex flex-col w-4/6 md:w-5/6 md:p-12 lg:p-16 p-24 pt-16 min-h-screen">
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
              className="search-button inline-block flex justify-center items-center border border-2 font-bold rounded-lg py-3 px-6 rounded-full "
            >
              搜尋
              <SearchIcon className="inline-block w-1/2 h-1/2" />
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <CircularProgress />
            <p className="text-black mt-5">查詢中，請稍候</p>
          </div>
        </div>
      )}
    </Page>
  );
}
