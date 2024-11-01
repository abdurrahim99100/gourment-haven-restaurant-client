import Cover from '../../components/cover/Cover';
import shopCoverImage from '../../assets/shop/shop-cover.jpg';
// react tabs;
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTabs from '../../components/orderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menus] = useMenu();
    const saladMenu = menus.filter(menu => menu.category === 'salad');
    const pizzaMenu = menus.filter(menu => menu.category === 'pizza');
    const soupMenu = menus.filter(menu => menu.category === 'soup');
    const dessertsMenu = menus.filter(menu => menu.category === 'dessert');
    const drinksMenu = menus.filter(menu => menu.category === 'drinks');
    return (
        <section>
            <Cover imageItem={shopCoverImage} title={'our shop'} />
            <div className='max-w-screen-2xl mx-auto'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    {/* tab plane */}
                    <TabPanel>
                        <OrderTabs items={saladMenu} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={pizzaMenu} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={soupMenu} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={dessertsMenu} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={drinksMenu} />
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Order;