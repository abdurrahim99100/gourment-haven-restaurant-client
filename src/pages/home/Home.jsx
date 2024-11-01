import { Helmet } from 'react-helmet-async';
import Banner from '../home/homeComponents/Banner';
import Featured from './homeComponents/Featured';
import PopularMenu from './homeComponents/PopularMenu';
import Testimonials from './homeComponents/Testimonials';
import Category from './homeComponents/Category';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gourment | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />

      <div>
        <p>hello</p>
      </div>
      <div>
        <h3>hello h3</h3>
      </div>

      <div>
        <h3>hello h3</h3>
      </div>

    </div>
  );
};

export default Home;