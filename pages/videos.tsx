import { collection, query, Timestamp } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaUserAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import Navbar from "@/components/navbar";
import Searchtab from "@/components/searchtab";
import { db } from "@/config/firebase";
import { NextPage } from "next";
import Loader from "@/components/loader";
import withAuth from '../utils/withAuth';
// import { getFirestore } from 'firebase/firestore';

interface Article {
  fileUrl: string | undefined;
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  userName: string;
  date: Date;
  createdAt: Timestamp;
}

const ArticlesList: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6  py-8">
      {articles.map((article) => {
        const userName = article.userName
          ?.substring(0, 5)
          .replace(/^\w/, (c) => c.toUpperCase());
        return (
          <div
            key={article.title}
            className="bg-white rounded-lg overflow-hidden shadow-lg "
          >
            <video
              src={article.fileUrl}
              width={640}
              height={627}
              autoPlay
              controls
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

const SportsNewsPage: NextPage = () => {
  const articlesRef = collection(db, "videos");
  const queryRef = query(articlesRef);

  const [articles, loading, error] = useCollectionData<Article>(queryRef, {
    idField: "id",
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="bg-gray-100 ">
        <Navbar />

        <Head>
          <title>Videos | BM News</title>
          <meta
            name="description"
            content="Stay up-to-date with the latest sports news from Your Company Name"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="px-4 pt-5 grid justify-items-center md:justify-items-end">
          <Searchtab />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900">Sports News</h1>

          {loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <ArticlesList articles={articles} />
          )}
        </div>
      </div>
    </>
  );
};

export default withAuth(SportsNewsPage);
