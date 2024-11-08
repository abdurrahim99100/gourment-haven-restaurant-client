import { Helmet } from 'react-helmet-async';
import Banner from '../home/homeComponents/Banner';
import Featured from './homeComponents/Featured';
import PopularMenu from './homeComponents/PopularMenu';
import Testimonials from './homeComponents/Testimonials';
import Category from './homeComponents/Category';
import ChefRecommends from './homeComponents/chefRecommends/ChefRecommends';

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Gourment | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <ChefRecommends />
      <Featured />
      <Testimonials />
    </section>
  );
};

export default Home;