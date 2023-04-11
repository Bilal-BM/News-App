import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { FaUserAlt } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Searchtab from '@/components/searchtab';

interface Article {
  title: string;
  image: string;
  description: string;
  author: string;
  date: Date;
}

const articles: Article[] = [
  {
    title: 'LeBron James scores 30 points in Lakers win',
    image: 'https://picsum.photos/id/10/800/600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper massa nisi, eu sagittis tellus pulvinar sit amet. Vivamus in ex a magna feugiat bibendum.',
    author: 'John Doe',
    date: new Date(2022, 2, 16),
  },
  {
    title: 'Ronaldo leads Manchester United to victory over Chelsea',
    image: 'https://picsum.photos/id/20/800/600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper massa nisi, eu sagittis tellus pulvinar sit amet. Vivamus in ex a magna feugiat bibendum.',
    author: 'Jane Smith',
    date: new Date(2022, 1, 28),
  },
  {
    title: 'Serena Williams wins Australian Open title',
    image: 'https://picsum.photos/id/30/800/600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper massa nisi, eu sagittis tellus pulvinar sit amet. Vivamus in ex a magna feugiat bibendum.',
    author: 'David Lee',
    date: new Date(2022, 1, 10),
  },
];

const SportsNewsPage: NextPage = () => {
  return (
    <div className="bg-gray-100">
        <Navbar/>
          
      <Head>
        <title>Sports News | Your Company Name</title>
        <meta name="description" content="Stay up-to-date with the latest sports news from Your Company Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" px-4 pt-5 grid justify-items-center md:justify-items-end">
      <Searchtab/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Sports News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {articles.map((article) => (
            <div key={article.title} className="bg-white overflow-hidden shadow rounded-lg">
              <Link legacyBehavior href="/">
                <a>
                  <div className="relative h-48">
                    {/* <Image className="object-cover" src={article.image} layout="fill" /> */}
                  </div>
                </a>
              </Link>
              <div className="px-4 py-5 sm:p-6">
                <Link legacyBehavior href="/">
                  <a className="text-xl font-medium text-gray-900 hover:text-gray-600">{article.title}</a>
                </Link>
                <p className="mt-1 text-gray-500">{article.description}</p>
<div className="mt-4 flex items-center">
<FaUserAlt className="w-4 h-4 mr-2 text-gray-400" />
<p className="text-gray-500">{article.author}</p>
<span className="mx-2 text-gray-400">·</span>
<BiTimeFive className="w-4 h-4 mr-2 text-gray-400" />
<p className="text-gray-500">{format(article.date, 'MMMM dd, yyyy')}</p>
</div>
</div>
</div>
))}
</div>
</div>
<Footer />
</div>
);
};

export default SportsNewsPage;
