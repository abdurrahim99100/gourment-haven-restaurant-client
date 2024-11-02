import FoodCard from '../foodCard/FoodCard';

const OrderTabs = ({ items }) => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center my-10'>
            {
                items.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default OrderTabs;