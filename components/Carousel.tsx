import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Caarousel = () => {
  return (
    <div className="relative ">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          <img
            src="../news1.jpg"
            alt="Slide 1"
            className="mx-auto w-7/12   object-fill"
            
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-xl font-bold">Health</h2>
            <p className="text-sm">Caption for slide 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../health.jpg"
            alt="Slide 2"
            className="mx-auto  w-7/12 object-fill"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-xl font-bold">Slide 2</h2>
            <p className="text-sm">Caption for slide 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../sports.jpg"
            alt="Slide 3"
            className="mx-auto w-7/12 object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-xl font-bold">Slide 3</h2>
            <p className="text-sm">Caption for slide 3</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Caarousel;
