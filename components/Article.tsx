import { NewsResponse } from "../types/news";

type Props = {
  article: NewsResponse;
};

const Article = ({ article }: Props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      {article.image && (
        <img
          className="w-full h-56 object-cover object-center"
          src={article.image}
          alt={article.title}
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold font-serif	 mb-2">{article.title}</h2>
        <p className="text-gray-700 text-base mb-2">
          {article.description}
        </p>
        <a
          className="inline-block bg-slate-700 text-white py-2 px-4 rounded hover:bg-blue-700"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Article;
