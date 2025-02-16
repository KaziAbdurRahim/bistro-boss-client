import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto my-8'>
            <p className='text-yellow-600 mb-2'>--- {heading} ---</p>
            <h3 className='uppercase text-3xl border-y-2 py-4'>{subHeading}</h3>
            
        </div>
    );
};

export default SectionTitle;