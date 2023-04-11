import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Searchtab from "@/components/searchtab";

type NewsArticle = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
};

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://picsum.photos/seed/picsum/800/600",
    date: "March 23, 2023",
    author: "John Doe",
    category: "World",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://picsum.photos/id/20/800/600",
    date: "March 22, 2023",
    author: "Jane Smith",
    category: "World",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://picsum.photos/id/60/800/600",
    date: "March 21, 2023",
    author: "John Doe",
    category: "World",
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://picsum.photos/id/401/800/600",
    date: "March 20, 2023",
    author: "Jane Smith",
    category: "World",
  },
  {
    id: 5,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/news-image5.jpg",
    date: "March 19, 2023",
    author: "John Doe",
    category: "World",
  },
];

const WorldNewsPage: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>(NEWS_ARTICLES);

  return (
    <>
    <Navbar />
    
      <Head>
        <title>BM News | World News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 pt-5 grid justify-items-center md:justify-items-end bg-gray-100">
      <Searchtab/>
      </div>

      <div className="bg-gray-100 min-h-screen flex flex-col  items-start ">  
        <h1 className="text-3xl font-bold text-gray-800  mb-4 ml-8">World News</h1>
        <p className="text-lg text-gray-600 mb-8 ml-8">
          Get the latest world news from BM News.
        </p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <Link legacyBehavior href={`/article/${article.id}`}>
                <a>
                  <img
                    className="h-48 w-full object-cover"
                    src={article.imageUrl}
                    alt={article.title}
                    />
                    <div className="p-4">
                    <div className="flex items-baseline">
                    <span className="bg-blue-200 text-blue-800 text-xs rounded-full px-2 py-1 uppercase font-semibold tracking-wide">
                    {article.category}
                    </span>
                    <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                    {article.author} | {article.date}
                    </div>
                    </div>
                    <h2 className="mt-2 mb-2 text-xl font-semibold text-gray-800">
                    {article.title}
                    </h2>
                    <p className="text-gray-700 text-base">{article.description}</p>
                    </div>
                    </a>
                    </Link>
                    </div>
                    ))}
                    </div>
                    </div>
                    <Footer />
                    </>
                    );
                    };
                    
                    export default WorldNewsPage;
