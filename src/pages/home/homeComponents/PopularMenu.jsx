import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItems from "../../../components/menuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menus] = useMenu();
    const popularMenu = menus.filter(menu => menu.category === 'popular');

    return (
        <section className="max-w-screen-2xl mx-auto px-5">
            <SectionTitle subHeading={'Popular menu'} heading={'from our menu'} />
            <div className="md:grid grid-cols-2 gap-y-5 gap-x-10">
                {
                    popularMenu.map(item => <MenuItems key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default PopularMenu;