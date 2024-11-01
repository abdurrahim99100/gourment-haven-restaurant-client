// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import swiper image;
import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import homeCoverImage from '../../../assets/home/chef-service.jpg'

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import Cover from '../../../components/cover/Cover';

const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={'From 11:00 am to 10:00 pm'} heading={'Order Online'} />
            <Swiper
                slidesPerView={4}  // Automatically adjust number of slides based on their width
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='max-w-[270px] relative'>
                        <img className='w-full' src={image1} alt="" />
                        <h3 className='absolute inset-0 flex justify-center items-end text-white uppercase mb-4 sm:mb-8 md:mb-12 lg:mb-14 text-xl sm:text-xs md:text-3xl lg:text-4xl'>salads</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-[270px] relative'>
                        <img className='w-full' src={image2} alt="" />
                        <h3 className='absolute inset-0 flex justify-center items-end text-white uppercase mb-4 sm:mb-8 md:mb-12 lg:mb-14 text-xl sm:text-xs md:text-3xl lg:text-4xl'>pizzas</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-[270px] relative'>
                        <img className='w-full' src={image3} alt="" />
                        <h3 className='absolute inset-0 flex justify-center items-end text-white uppercase mb-4 sm:mb-8 md:mb-12 lg:mb-14 text-xl sm:text-xs md:text-3xl lg:text-4xl'>sups</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-[270px] relative'>
                        <img className='w-full' src={image4} alt="" />
                        <h3 className='absolute inset-0 flex justify-center items-end text-white uppercase mb-4 sm:mb-8 md:mb-12 lg:mb-14 text-xl sm:text-xs md:text-3xl lg:text-4xl'>desserts</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-[270px] relative'>
                        <img className='w-full' src={image5} alt="" />
                        <h3 className='absolute inset-0 flex justify-center items-end text-white uppercase mb-4 sm:mb-8 md:mb-12 lg:mb-14 text-xl sm:text-xs md:text-3xl lg:text-4xl'>sups</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='my-20'>
                <Cover imageItem={homeCoverImage}/>
            </div>
        </div>
    );
};

export default Category;