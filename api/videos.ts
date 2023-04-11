import type { NextApiRequest, NextApiResponse } from 'next';

export type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
};

export const getVideos = async (): Promise<Video[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
  const data = await response.json();
  const videos: Video[] = data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: item.url,
    thumbnailUrl: item.thumbnailUrl,
  }));

  return videos;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Video[]>,
) {
  const videos = await getVideos();
  res.status(200).json(videos);
}
