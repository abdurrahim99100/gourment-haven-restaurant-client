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
                    <button className="btn btn-neutral uppercase border-0 border-b-4 py-5">order now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;