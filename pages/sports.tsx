import { Timestamp, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaUserAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import Navbar from "@/components/navbar";
import withAuth from '@/utils/withAuth';
import Searchtab from "@/components/searchtab";
import { db } from "@/config/firebase";
import Loader from "@/components/loader";

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  userName: string;
  date: Date;
  createdAt: Timestamp;
}

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
      {articles.map((article) => {
        const userName = article.userName
          ?.substring(0, 5)
          .replace(/^\w/, (c) => c.toUpperCase());
        return (
          <div
            key={article.title}
            className="bg-white rounded-lg overflow-hidden shadow-lg "
          >
            <Image
              src={article.imageUrl}
              alt="News image 1"
              width={640}
              height={427}
              layout="responsive"
            />
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-4">
                {article.description}
              </p>
              <Link legacyBehavior href="/signin">
                <a className="inline-block bg-blue-900  font-bold text-gray-100 pt-1 rounded-lg py-2 px-4 hover:bg-slate-800 focus:outline-none focus:shadow-shadow-md">
                  Read More
                </a>
              </Link>
              <div className="mt-4 flex items-center">
                <FaUserAlt className="w-4 h-4 mr-2 text-gray-400" />
                <p className="text-gray-500">{userName}</p>

                <BiTime className="w-4 h-4 ml-4 mr-2 text-gray-400" />
                <p className="text-gray-500">
                  {format(
                    new Date(article.createdAt.toMillis()),
                    "MMMM dd, yyyy"
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ArticlePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sports"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Article[];
        setArticles(data);
        setLoading(false);
      } catch (error:any)
      {
        setLoading(false);
        setError(error.message);
        }
        };
        fetchData();
}, []);

if (loading) {
return <Loader />;
}

if (error) {
return <p>{error}</p>;
}

return (
<>
<Head>
<title>Articles - My Blog</title>
</Head>
<Navbar />
<Searchtab />
<div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 pt-8">
<h1 className="text-2xl font-bold text-gray-900">Articles</h1>
<ArticlesList articles={articles} />
</div>
</>
);
};

export default withAuth(ArticlePage);