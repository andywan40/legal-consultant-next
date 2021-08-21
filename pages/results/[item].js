import { useState, useEffect } from "react";
import Link from "next/link";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useAppContext } from "../_app";
import Page from "../../components/Page";
import ItemLink from "../../components/ItemLink";

export default function Item({ no }) {
  const router = useRouter();
  const { items, savedIds, setSavedIds } = useAppContext();
  const [itemObj, setItemObj] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    let match = false;
    for (let item of items) {
      if (item.no === no) {
        setItemObj({ ...item, date: new Date(item.date) });
        match = true;
        break;
      }
    }
    if (!match) {
      router.push("/");
    }
  }, []);

  const handleCopyText = e => {
    navigator.clipboard.writeText(itemObj.judgement);
    alert("成功複製");
  };

  const handlePDFDownload = e => {
    const input = document.getElementById("divToDownload");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  const toggleSave = e => {
    e.stopPropagation();
    if (savedIds.includes(no)) {
      let newSavedIds = savedIds.filter(id => id !== no);
      setSavedIds(newSavedIds);
    } else {
      setSavedIds([...savedIds, no]);
    }
  };

  useEffect(() => {
    if (savedIds.includes(no)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
    localStorage.setItem("savedIds", JSON.stringify(savedIds));
  }, [savedIds]);

  return (
    <Page>
      {Object.keys(itemObj).length !== 0 ? (
        <div className="grid grid-cols-8 h-screen max-h-screen w-full pt-16 py-20 ">
          {/* <div className="col-start-2 col-span-7 mb-2">
            <Link href="/results">
              <button>查詢結果</button>
            </Link>
          </div> */}
          <div className="col-start-2 col-span-4 border-r border-t border-gray-400">
            <div id="divToDownload" className="pb-6 pr-5 overflow-auto h-75vh">
              <div className="flex justify-between py-5">
                <div
                  className={
                    itemObj.type === "判決" ? "type1 py-1" : "type2 py-1"
                  }
                >
                  <span className="font-bold">{itemObj.type}</span>
                </div>
                <div>
                  <svg
                    onClick={handleCopyText}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon h-6 w-6 mr-2 inline-block rounded-lg bookmark-border p-1 rounded-full cursor-pointer"
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
                    onClick={handlePDFDownload}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon h-6 w-6 mr-2 inline-block rounded-lg bookmark-border p-1 rounded-full cursor-pointer"
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
                    onClick={toggleSave}
                    className="h-6 w-6 inline-block rounded-lg bookmark-border p-1 rounded-full cursor-pointer"
                    fill={isSaved ? "#011f26" : "none"}
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
              <div className="content h-full w-full p-2">
                <p>
                  <span className="font-bold">裁判字號】</span>
                  {no}
                </p>
                {itemObj?.date && (
                  <p>
                    <span className="font-bold">【裁判日期】</span>
                    {`民國 ${itemObj?.date.getFullYear() - 1911} 年 ${
                      itemObj?.date.getMonth() + 1
                    } 月 ${itemObj?.date.getDate()} 日`}
                  </p>
                )}
                <p>
                  <span className="font-bold">【裁判案由】</span>
                  {itemObj.reason}
                </p>
                {Object.keys(itemObj).length !== 0 && (
                  <div>
                    {Array.isArray(itemObj?.judgement) ? (
                      <div>
                        <span className="font-bold">【裁判內文】</span>
                        {itemObj?.judgement.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    ) : (
                      <div>
                        <span className="font-bold">【裁判內文】</span>
                        <div>
                          {itemObj &&
                            itemObj?.judgement.split("\r\n").map((l, i) => (
                              <p key={i} className="tracking-wider">
                                {l}
                              </p>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-start-6 col-span-2">
            <div className="p-6 overflow-auto border-t border-gray-400 h-75vh">
              <h1 className="title-color text-lg font-bold">相關條文</h1>
              <div className="mt-2">
                {itemObj?.relatedIssues &&
                  itemObj?.relatedIssues.map((issue, i) => (
                    <ItemLink
                      key={i}
                      lawName={issue.lawName}
                      issueRef={issue.issueRef}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <CircularProgress />
        </div>
      )}
    </Page>
  );
}

export const getServerSideProps = context => {
  const no = context.query.item;
  return {
    props: {
      no,
    },
  };
};
