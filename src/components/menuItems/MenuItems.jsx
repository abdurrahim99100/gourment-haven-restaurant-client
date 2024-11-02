const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <section className='flex items-center gap-x-5'>
            <img style={{ borderRadius: '0 200px 200px 200px', width: '80px',height: '80px' }} src={image} alt="" />
            <div className="w-full">
                <div className='flex gap-2 items-start justify-between'>
                    <h4 className='text-xl'>{name} --------</h4>
                    <p className='text-md bg-black px-2 py-1 rounded text-yellow-400 font-semibold'>${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </section>
    );
};

export default MenuItems;