import { useEffect } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { outbreakNews } from "../Utils/data";
import { User } from "lucide-react";

const OutBreakPage = () => {
  const articleList = outbreakNews.articles;

  return (
    <div>
      <Header />
      <SubHeader heading={"Disease Outbreak"} />
      <div className="flex  flex-col gap-4 w-3/4 mx-auto">
        {" "}
        {articleList.map((arc) => (
          <div className="flex gap-4 border-1 border-gray-200 p-2 rounded-lg shadow-lg">
            <img
              src={arc.urlToImage}
              className="w-64 h-40 rounded-lg object-cover object-center"
            ></img>

            <div className="flex flex-col justify-between p-5">
              <div>
                {" "}
                <h1 className="text-lg font-bold">{arc.title}</h1>
                <h1 className="text-sm text-gray-600">{arc.description}</h1>
              </div>
              <p className="flex gap-2 text-sm font-semibold">
                <User />
                <span> {arc.author}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OutBreakPage;
