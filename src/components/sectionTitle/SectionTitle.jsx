import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='mx-auto w-9/12 md:w-6/12 xl:w-5/12 text-center mb-10 md:mb-20 mt-10 md:mt-24'>
            <p className='text-yellow-500 text-sm md:text-md xl:text-xl pb-3'>----- {subHeading} -----</p>
            <h3 className='text-xl md:text-2xl xl:text-4xl border-y-4 py-3 md:py-4 uppercase'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;