import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Video } from '../types/videos';
import { getVideos } from '../api/videos';
import VideoCard from '../components/videocard';
import Footer from '@/components/footer';
import Searchtab from '@/components/searchtab';
import Navbar from '@/components/navbar';

const VideoPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const videosData = await getVideos();
  //     setVideos(videosData);
  //   };

  //   fetchVideos();
  // }, []);

  return (
    <div className="bg-gray-100">
    <Navbar />
      <Head>
        <title>Videos - News Project</title>
      </Head>
      <div className="px-4 pt-5 grid justify-items-center md:justify-items-end ">
      <Searchtab/>
      </div>
      <div className="container mx-auto  bg-gray-100">
        <h1 className="text-3xl font-bold mb-5 ">Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

      </div>
      <Footer />
      </div>
  );
};

export default VideoPage;
