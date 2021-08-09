import Page from "../components/Page";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleSearch = e => {
    router.push("/page1");
  };
  return (
    <Page>
      <div className="text-center flex flex-col w-4/6 p-36 min-h-screen">
        <h1 className="text-black text-xl ">案例事實</h1>
        <hr className="border hr mt-3"></hr>
        <h6 className="text-black mt-10">請選擇法律類別</h6>
        <div className="mt-3">
          <button className="border border-black rounded-lg bg-white hover:bg-gray-100 text-black py-3 px-10 mx-3 rounded-full">
            民法
          </button>
          <button className="border border-black rounded-lg bg-white hover:bg-gray-100 text-black py-3 px-10 mx-3 rounded-full">
            行政訴訟
          </button>
          <button className="border border-black rounded-lg bg-white hover:bg-gray-100 text-black py-3 px-10 mx-3 rounded-full">
            刑法
          </button>
        </div>
        <div className="border border-md border-gray-400 text-gray-600 p-5 mt-8">
          一、蘇宏仁係雕刻家石材有限公司（址設臺北市○○區○○街49巷2之2號，下稱雕刻家公司）實際負責人，雕刻家公司係從事承攬石材施作工程，劉瑞榮於民國92年底經由他人介紹，向雕刻家公司承作石材工程，且因報稅需要而交付身分證與蘇宏仁，並授權蘇宏仁影印其身分證影本，及製作劉瑞榮之印章，惟僅授權供報稅之用。詎蘇宏仁未經劉瑞榮之同意，分別基於偽造私文書後持以行使及使公務員登載不實之犯意，而為下列行為：（一）於93年7
          月間，接續在如附表編號一、二所示雕刻家公司 93年7
          月13日變更登記申請書、93年7 月12日股東同意書
          上，偽造劉瑞榮之簽名，且在上開所示文件及雕刻家公司
          章程修正條文對照表上，盜蓋劉瑞榮之印章，並冒用上揭
          取得之劉瑞榮身分證影本，以示劉瑞榮願意承受蘇宏仁在
          雕刻家公司之股份，擔任雕刻家公司負責人且修改章程部
          分條文。蘇宏仁復於93年7 月16日，持上開偽造之文書向
          臺北市政府申請將雕刻家公司負責人變更為劉瑞榮等事由
          而行使之，使該承辦公務員將上開不實事項登記於其職務
          上所掌管之公文書內，足生損害於劉瑞榮及政府機關管理
          商業登記之正確性。（二）嗣於96年6
          月間，再次冒用劉瑞榮之身分證影本，且在如
          附表編號三所示之雕刻家公司96年6 月26日之股東同意書
          上，偽造劉瑞榮之簽名、並在上開同意書及雕刻家公司修
          改章程對照表、雕刻家公司96年6 月26日之變更登記申請
          書上，接續盜蓋上開「劉瑞榮」印章，以示劉瑞榮同意承
          受雕刻家公司其他股東股份並修改章程。
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
