import { useState, useEffect } from "react";
import fetchNews from "../lib/fetchNews";
import sortNewsByImage from "../lib/sortNewsByImage";
import Article from "../components/Article";
import Navbar from "@/components/navbar";
import withAuth from '../utils/withAuth';

const Home = () => {
  const [news, setNews] = useState<NewsResponse[]>([]);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await fetchNews();
        const sortedNews = sortNewsByImage(newsData);
        setNews(sortedNews);
      } catch (error) {
        console.log(error);
      }
    };

    loadNews();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-4">
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8 ">
          {news.map((article) => (
            <Article key={article.url} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default withAuth(Home);
