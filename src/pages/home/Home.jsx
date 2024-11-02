import { Helmet } from 'react-helmet-async';
import Banner from '../home/homeComponents/Banner';
import Featured from './homeComponents/Featured';
import PopularMenu from './homeComponents/PopularMenu';
import Testimonials from './homeComponents/Testimonials';
import Category from './homeComponents/Category';

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Gourment | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </section>
  );
};

export default Home;