import React from 'react';
import img from "../../../assets/gruf.avif"

const Gallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-5 mt-10'>
            <div className='mx-auto'>
                <img src={img} alt="" />
            </div>
            <div className='mx-auto'>
                <img src={img} alt="" />
            </div>
            <div className='mx-auto'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Gallery;