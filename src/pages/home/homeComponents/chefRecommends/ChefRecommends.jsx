import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const ChefRecommends = () => {

    const [menu] = useMenu();

    const chefRecommendsMenu = menu.filter(item => item.category === 'hot');

    const truncateText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...'; // Truncate and add ...
        }
        return text; // Return original text if within length
    };

    const fixedTextStyle = {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3, // Number of lines to show
        overflow: 'hidden',
        textOverflow: 'ellipsis', // Adds the ...
        height: '4.5em', // Adjust height based on the line height
        textAlign: 'left'
    };

    return (
        <>
            <section className="container mx-auto h-[20vh] bg-black text-white flex items-center justify-center rounded mt-52">
                <h2 className="text-7xl">Contact Us +8801857400322</h2>
            </section>
            <SectionTitle heading={'chef recommends'} subHeading={'Should Try'} />
            <section className="container mx-auto">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        chefRecommendsMenu?.map(menu =>
                            <SwiperSlide key={menu._id}>
                                <div>
                                    <img className="" src={menu.image} alt="" />
                                    <div className="px-5">
                                        <p className="text-2xl my-2">{menu.name}</p>
                                        <p style={fixedTextStyle}>
                                            {
                                                truncateText(menu.recipe, 150)
                                            }
                                        </p>
                                        <button
                                            // onClick={() => handleAddToCart(item)}
                                            className="btn px-6 py-3 text-md bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-white font-semibold rounded-md shadow-lg hover:shadow-2xl hover:from-[#E1C16E] hover:to-[#A67B5B] transform transition duration-300 ease-in-out border-none mt-5 mb-7"
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }

                </Swiper>
            </section>
        </>
    );
};

export default ChefRecommends;