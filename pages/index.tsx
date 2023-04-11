import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const LandingPage = () => {
  return (
    <>
    <Navbar />
      <Head>
        <title>BM News </title>
        <meta name="description" content="Get the latest news from around the world." />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-8">
        <div className="flex flex-col items-center justify-center w-full px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl md:text-6xl">
            BM News
          </h1>
          <p className="mt-3 mb-10 text-lg text-center text-gray-600 sm:text-xl md:text-2xl">
            Get the latest news from around the world
          </p>

          <div className="grid grid grid-cols-4 gap-4">
            
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/news1.jpg"
                  alt="News image 1"
                  width={640}
                  height={427}
                  layout="responsive"
                />
                <div className="p-4">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Buisiness
                  </h2>
                  <p className="text-gray-600">
                  Stay up-to-date with the latest business news from around the world.
                Get insights into the financial markets, corporate world, and economy with our comprehensive coverage of business news.
                  </p>
                  <Link legacyBehavior href="/signin">
                    <a className="text-blue-500 inline-flex items-center mt-4">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            

            
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/sports.jpg"
                  alt="News image 2"
                  width={640}
                  height={427}
                  layout="responsive"
                />
                <div className="p-4">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Sports
                  </h2>
                  <p className="text-gray-600">
                  Get the latest updates and highlights from the world of sports with our comprehensive coverage of sports news.
                   From football to basketball, cricket to tennis, stay informed and up-to-date.
                  </p>
                  <Link legacyBehavior href="/signin">
                    <a className="text-blue-500 inline-flex items-center mt-4">
                      Read More
                    </a>
                  </Link>
                </div>
              
            </div>

            
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/health.jpg"
                  alt="News image 3"
                  width={640}
                  height={427}
                  layout="responsive"
                />
                <div className="p-4">
<h2 className="text-lg font-medium text-gray-900 mb-2">
Health 
</h2>
<p className="text-gray-600">
Stay informed on the latest health news from around the world with our health news section.
 Get updates on medical breakthroughs, health policies, disease outbreaks, and more.
</p>
<Link legacyBehavior href="/news/789">
<a className="text-blue-500 inline-flex items-center mt-4">
Read More
</a>
</Link>
</div>

</div>


              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/world.jpg"
                  alt="News image 3"
                  width={640}
                  height={427}
                  layout="responsive"
                />
                <div className="p-4">
<h2 className="text-lg font-medium text-gray-900 mb-2">
World 
</h2>
<p className="text-gray-600">
Stay up-to-date with the latest breaking news from around the world, covering politics, current events, and global affairs with our comprehensive world news coverage.
</p>
<Link legacyBehavior href="/signin">
<a className="text-blue-500 inline-flex items-center mt-4">
Read More
</a>
</Link>
</div>
</div>



</div>
</div>
</div>
<Footer />
</>
);
};

export default LandingPage;
