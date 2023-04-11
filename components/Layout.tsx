import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Sign up - My Website</title>
        <meta name="description" content="Sign up page for My Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.svg" alt="My Website" />
            </div>
          </div>
        </div>
      </nav>
      <main className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
};

export default Layout;
