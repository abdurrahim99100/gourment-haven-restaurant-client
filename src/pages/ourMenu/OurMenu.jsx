import { Helmet } from 'react-helmet-async';
import Cover from '../../components/cover/Cover';
import MenuCategory from '../../components/menuCategory/MenuCategory';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import coverImage from '../../assets/menu/banner3.jpg';
import dessertImage from '../../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../assets/menu/pizza-bg.jpg';
import saladImage from '../../assets/menu/salad-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg';

const OurMenu = () => {
    const [menus] = useMenu();
    // const popularMenu = menus.filter(menu => menu.category === 'popular');
    const offeredMenu = menus.filter(menu => menu.category === 'offered');
    const dessertsMenu = menus.filter(menu => menu.category === 'dessert');
    const pizzaMenu = menus.filter(menu => menu.category === 'pizza');
    const saladMenu = menus.filter(menu => menu.category === 'salad');
    const soupMenu = menus.filter(menu => menu.category === 'soup');
    return (
        <>
            <Helmet>
                <title>Gourment | Our Menu</title>
            </Helmet>
            <section>
                <Cover imageItem={coverImage} title={'our menu'} description={'world you like to try a dish'} />
                {/* offered menu */}
                <SectionTitle subHeading={"Don't miss"} heading={"today's offers"} />
                <MenuCategory items={offeredMenu} />
                {/* desserts */}
                <MenuCategory items={dessertsMenu} imageItem={dessertImage} title={'desserts'} />
                {/* pizza */}
                <MenuCategory items={pizzaMenu} imageItem={pizzaImage} title={'pizza'} />
                {/* salad */}
                <MenuCategory items={saladMenu} imageItem={saladImage} title={'salad'} />
                {/* soup */}
                <MenuCategory items={soupMenu} imageItem={soupImage} title={'soup'} />
            </section>
        </>
    );
};

export default OurMenu;