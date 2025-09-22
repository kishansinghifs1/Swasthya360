import { useEffect, useState } from "react";

import SubHeader from "../components/SubHeader";
import { User } from "lucide-react";

const OutBreakPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          "https://symtoms.kishansingh956196.workers.dev/api/v1/swasthya360/outbreaks"
        );
        if (!res.ok) throw new Error("Failed to fetch outbreak news");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div>
      <SubHeader heading={"Disease Outbreak"} />
      <div className="flex flex-col gap-4 w-3/4 mx-auto my-5">
        {articles.map((arc, idx) => (
          <div
            key={idx}
            className="flex gap-4 border border-gray-200 p-2 rounded-lg shadow-lg"
          >
            {arc.urlToImage ? (
              <img
                src={arc.urlToImage}
                className="w-64 h-40 rounded-lg object-cover object-center"
                alt={arc.title}
              />
            ) : (
              <div className="w-64 h-40 rounded-lg bg-gray-200 flex items-center justify-center">
                No Image
              </div>
            )}

            <div className="flex flex-col justify-between p-5">
              <div>
                <h1 className="text-lg font-bold">{arc.title}</h1>
                <p className="text-sm text-gray-600">{arc.description}</p>
              </div>
              <p className="flex gap-2 text-sm font-semibold mt-2">
                <User />
                <span>{arc.author || (arc.source && arc.source.name)}</span>
              </p>
              <a
                href={arc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm mt-1"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutBreakPage;
