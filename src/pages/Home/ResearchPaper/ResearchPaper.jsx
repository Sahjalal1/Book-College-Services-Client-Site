import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPaper = () => {

    return (

        <div className='border bg-[#ffffffce] w-[90%] mx-auto my-10'>
            <h1 className='text-center text-3xl font-bold my-6'>Research Papers</h1>
            <div className='text-center my-6'>
                <h1 className='text-2xl font-medium'>1. Artificial Intelligence and Its Applications</h1>
                <h1 className='mb-4'><span className='text-xl font-medium'>Link :</span> <Link className="link link-primary" to='https://example.com/paper1'>https://example.com/paper1</Link></h1>


                <h1 className='text-2xl font-medium'>2. Machine Learning in Healthcare</h1>
                <h1 className='mb-4'><span className='text-xl font-medium'>Link :</span> <Link className="link link-primary" to='https://example.com/paper2'>https://example.com/paper2</Link></h1>

                <h1 className='text-2xl font-medium mt-4'>3. Climate Change and Environmental Impact</h1>
                <h1><span className='text-xl font-medium'>Link :</span> <Link className="link link-primary" to='https://example.com/paper3'>https://example.com/paper3</Link></h1>
            </div>

        </div>
    );
};

export default ResearchPaper;