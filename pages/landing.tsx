import { useState } from "react";
import Head from "next/head";

import Card from "@/components/card";
import Navbar from "@/components/navbar";
import Searchtab from "@/components/searchtab";
import Footer from "@/components/footer";

const index = () => {
  // const [searchText, setSearchText] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(`Search for: ${searchText}`);
  };

  return (
    <>
      <Head>
        <title>News Portal</title>
      </Head>
      <Navbar/>
      
      <div className="bg-white">
      
        <main className="px-4 md:px-8">
        <div className="px-4 pt-5 grid justify-items-center md:justify-items-end">
      <Searchtab/>
      </div>
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-8 ">Latest News</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                imageSrc="https://picsum.photos/id/1018/400/400"
              />
              <Card
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                imageSrc="https://picsum.photos/id/1015/400/400"
              />
              <Card
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                imageSrc="https://picsum.photos/id/1016/400/400"
              />
            
            </div>
            
          </section>
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-8">Top Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                imageSrc="https://picsum.photos/id/1019/400/400"
              />
              <Card
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis,sed maximus sapien rutrum ac."
                imageSrc="https://picsum.photos/id/1020/400/400"
                />
                </div>
                </section>
                <section className="mb-12">
                <h2 className="text-4xl font-bold mb-8">Sports</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                             title="Lorem ipsum dolor sit amet"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                             imageSrc="https://picsum.photos/id/1021/400/400"
                           />
                <Card
                             title="Lorem ipsum dolor sit amet"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                             imageSrc="https://picsum.photos/id/1022/400/400"
                           />
            
                </div>
                </section>
                <section className="mb-12">
                <h2 className="text-4xl font-bold mb-8">Entertainment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                             title="Lorem ipsum dolor sit amet"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                             imageSrc="https://picsum.photos/id/1023/400/400"
                           />
                <Card
                             title="Lorem ipsum dolor sit amet"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                             imageSrc="https://picsum.photos/id/1024/400/400"
                           />
                </div>
                </section>
                <section className="mb-12">
                <h2 className="text-4xl font-bold mb-8">Technology</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                             title="Lorem ipsum dolor sit amet"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                             imageSrc="https://picsum.photos/id/1025/400/400"
                           />
                <Card
                             title="Lorem ipsum dolor sit amet"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                             imageSrc="https://picsum.photos/id/1026/400/400"
                           />
                </div>
                </section>
                <section className="mb-12">
                <h2 className="text-4xl font-bold mb-8">Politics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolorsit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                imageSrc="https://picsum.photos/id/1027/400/400"
                />
                <Card
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus vel massa consequat, quis ornare justo pulvinar. Duis semper ex turpis, sed maximus sapien rutrum ac."
                imageSrc="https://picsum.photos/id/1028/400/400"
                />
                
                </div>
                </section>
                
                </main>
                </div>
                <Footer/>
                </>
                );
                }
                export default index;
