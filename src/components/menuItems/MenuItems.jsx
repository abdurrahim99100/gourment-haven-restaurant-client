import React from 'react';

const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <section className='flex items-center gap-x-5'>
            <img style={{ borderRadius: '0 200px 200px 200px', width: '80px',height: '80px' }} src={image} alt="" />
            <div>
                <div className='flex gap-2 items-start justify-between'>
                    <h4 className='text-3xl'>{name}--------------</h4>
                    <p className='text-xl text-yellow-500'>${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </section>
    );
};

export default MenuItems;