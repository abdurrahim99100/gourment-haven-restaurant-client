import SectionTitle from '../../../components/sectionTitle/SectionTitle';

import checkItOut from '../../../assets/home/featured.jpg'
import checkItOutBackground from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <section style={{ backgroundImage: `url(${checkItOutBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='py-20 mt-20 bg-fixed'>
            <SectionTitle subHeading={'Check it Out'} heading={'form our check it out'} />
            <div className='max-w-screen-xl mx-auto flex gap-10 items-center text-white'>
                <img className='w-2/5' src={checkItOut} alt="" />
                <div>
                    <h4>March 20, 2023 <br />
                        WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quam aspernatur itaque quod aliquam amet at veritatis! Molestias, ipsam ea.</p>
                    <button className="btn px-6 py-3 mt-5 text-md uppercase bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-white font-semibold rounded-md shadow-lg hover:shadow-2xl hover:from-[#E1C16E] hover:to-[#A67B5B] transform transition duration-300 ease-in-out border-none">red more</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;