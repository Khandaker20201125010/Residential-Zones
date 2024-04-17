

import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className=" lg:container lg:mx-auto sm:container sm:mx-auto">
      <div className="font-bold mr-12">
        <Marquee speed={150}>
         Welcome to the Best Residential website . Find your dream or any  type of estate you looking for you can get from here . Thank you. 
        </Marquee>
      </div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><div className='slide slide1'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-white m-auto font-bold'>Realistic zone</h1>
              <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>

              <div className='m-auto text-center mt-5'>
                <button className='btn text-white w-40 rounded-full bg-blue-950 text-xl'>Show</button>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className='slide slide2'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-white m-auto font-bold'>Realistic zone</h1>
              <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>
              <div className='m-auto text-center mt-5'>
                <button className='btn text-white w-40 rounded-full bg-blue-950 text-xl'>Show</button>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className='slide slide3'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-white m-auto font-bold'>Realistic zone</h1>
              <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>
              <div className='m-auto text-center mt-5'>
                <button className='btn text-white w-40 rounded-full bg-blue-950 text-xl'>Show</button>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className='slide slide4'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-white m-auto font-bold'>Realistic zone</h1>
              <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>
              <div className='m-auto text-center mt-5'>
                <button className='btn text-white w-40 rounded-full bg-blue-950 text-xl'>Show</button>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className='slide slide5'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-white m-auto font-bold'>Realistic zone</h1>
              <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>
              <div className='m-auto text-center mt-5'>
                <button className='btn text-white w-40 rounded-full bg-blue-950 text-xl'>Show</button>
              </div>
            </div>
          </div></SwiperSlide>
        </Swiper>
      </>

    </div>
  );
};

export default Banner;