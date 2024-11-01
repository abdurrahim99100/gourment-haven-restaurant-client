import FoodCard from '../foodCard/FoodCard';

const OrderTabs = ({ items }) => {
    return (
        <div className='grid gap-y-10 justify-items-center grid-cols-3 my-10'>
            {
                items.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default OrderTabs;