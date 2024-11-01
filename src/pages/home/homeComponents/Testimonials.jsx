import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://gourment-haven-restaurant-server.vercel.app/review')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle subHeading={'What Our Clients Say'} heading={'testimonials'} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map((review, index) => <SwiperSlide key={index} className=''>
            <div className='mx-40 grid items-center justify-center'>
              <Rating className='mx-auto'
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className='py-5 text-center'>{review.details}</p>
              <h3 className='text-yellow-500 text-center text-3xl'>{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;