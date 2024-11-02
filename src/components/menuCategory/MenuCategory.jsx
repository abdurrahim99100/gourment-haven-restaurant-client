import MenuItems from '../menuItems/MenuItems';
import Cover from '../cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, imageItem, title }) => {
    return (
        <div className='my-20'>
            {title && <Cover imageItem={imageItem} title={title} />}
            <div className='max-w-screen-2xl mx-auto px-5 md:grid grid-cols-2 gap-y-5 gap-x-10'>
                {
                    items.map(item => <MenuItems key={item._id} item={item} />)
                }
                <Link to={`/order/${title}`}>   
                    <button className="btn px-6 py-3 text-md bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-white font-semibold rounded-md shadow-lg hover:shadow-2xl hover:from-[#E1C16E] hover:to-[#A67B5B] transform transition duration-300 ease-in-out border-none">order now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;