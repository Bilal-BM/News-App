import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { FaUserAlt } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Searchtab from '@/components/searchtab';

interface Article {
  title: string;
  image: any;
  description: string;
  author: string;
  date: Date;
}

const articles: Article[] = [
  {
    title: 'New Product Launch: Introducing Our Latest Innovation',
    image: 'https://picsum.photos/id/10/800/600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper massa nisi, eu sagittis tellus pulvinar sit amet. Vivamus in ex a magna feugiat bibendum.',
    author: 'John Doe',
    date: new Date(2022, 2, 16),
  },
  {
    title: 'Company Merger: What This Means for Our Customers',
    image: 'https://picsum.photos/id/20/800/600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper massa nisi, eu sagittis tellus pulvinar sit amet. Vivamus in ex a magna feugiat bibendum.',
    author: 'Jane Smith',
    date: new Date(2022, 1, 28),
  },
  {
    title: 'Our Commitment to Sustainability: Going Green in 2022',
    image: 'https://picsum.photos/id/30/800/600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper massa nisi, eu sagittis tellus pulvinar sit amet. Vivamus in ex a magna feugiat bibendum.',
    author: 'David Lee',
    date: new Date(2022, 1, 10),
  },
];

const BusinessNewsPage: NextPage = () => {
  return (
    <div className="bg-gray-100">

<Navbar />
      <Head>
        <title>Business News | Your Company Name</title>
        <meta name="description" content="Stay up-to-date with the latest business news from Your Company Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-4 pt-5 grid justify-items-center md:justify-items-end">
      <Searchtab/>
      </div>
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold text-gray-900">Business News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {articles.map((article) => (
            <div key={article.title} className="bg-white overflow-hidden shadow rounded-lg">
              <Link legacyBehavior href="/">
                <a>
                  <div className="relative h-48">
                    <Image className="object-cover" src={article.image} alt={article.description} layout="fill" />
                  </div>
                </a>
              </Link>
              <div className="px-4 py-5 sm:p-6">
                <Link legacyBehavior href="/">
                  <a className="text-xl font-medium text-gray-900 hover:text-gray-600">{article.title}</a>
                </Link>
                <p className="mt-1 text-gray-500">{article.description}</p>
                <div className="flex items-center mt-4">
                  <FaUserAlt className="h-6 w-6 text-gray-400" />
<p className="ml-2 text-gray-600">{article.author}</p>
<BiTimeFive className="h-6 w-6 ml-4 text-gray-400" />
<p className="ml-2 text-gray-600">{format(article.date, 'MMM dd, yyyy')}</p>
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

export default BusinessNewsPage;
