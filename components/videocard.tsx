import { Video } from '../types/videos';

type Props = {
  video: Video;
};

const VideoCard = ({ video }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative pb-9/16">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={video.embedUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{video.title}</h2>
        <p className="text-gray-700 text-base">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
