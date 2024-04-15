// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import s1 from '../../assets/image/s1.jpeg'
import s2 from '../../assets/image/s2.jpeg'
import s3 from '../../assets/image/s3.jpeg'


// import required modules
import { Pagination } from 'swiper/modules';
const Perfect = () => {
    return (
        <div className='flex justify-between mt-16 max-sm:flex max-sm:flex-col shadow-lg  relative'>
            <div className='w-1/2 bg-orange-300 rounded-l-2xl'>
                <h1 className='text-4xl font-bold p-16 '>Find the perfect estate in area</h1>
                <p className='text-xl ml-10 '>Discover the epitome of real estate excellence with us. Unlock the essence of premium real estate, where every transaction embodies sophistication and distinction, spanning from coast to coast.</p>
            </div>
            <div className='w-2/3'>
                <>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div >
                            <img  className='h-[400px]'src={s1} alt="" />
                            </div></SwiperSlide>
                        <SwiperSlide><div>
                            <img className='h-[400px]'src={s2} alt="" />
                            </div></SwiperSlide>
                        <SwiperSlide><div>
                            <img className='h-[400px] rounded-r-2xl' src={s3} alt="" />
                            </div></SwiperSlide>
                    </Swiper>
                </>

            </div>
        </div>
    );
};

export default Perfect;