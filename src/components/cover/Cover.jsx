import { Parallax } from 'react-parallax';

const Cover = ({ imageItem, title }) => {

    return (
        
            <Parallax
                blur={{ min: -15, max: 22 }}
                bgImage={imageItem}
                bgImageAlt="the dog"
                strength={-300}
                className='mb-[100px]'
            >
                <div
                    className="hero text-white">
                    {/* <div className="hero-overlay bg-opacity-60"></div> */}
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md py-[10px] md:py-[40px] lg:py-[80px] xl:py-[120px]">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn px-6 py-3 text-md bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-white font-semibold rounded-md shadow-lg hover:shadow-2xl hover:from-[#E1C16E] hover:to-[#A67B5B] transform transition duration-300 ease-in-out border-none">Get Started</button>
                        </div>
                    </div>
                </div>
            </Parallax>
    );
};

export default Cover;