const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <section className='flex items-center gap-x-5'>
            <img style={{ borderRadius: '0 200px 200px 200px', width: '80px',height: '80px' }} src={image} alt="" />
            <div className="w-full">
                <div className='flex gap-2 items-start justify-between'>
                    <h4 className='text-xl font-semibold'>{name}--------------</h4>
                    <p className='text-xl text-yellow-500 font-bold'>${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </section>
    );
};

export default MenuItems;