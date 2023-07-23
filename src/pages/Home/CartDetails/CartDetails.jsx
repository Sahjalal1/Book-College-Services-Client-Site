import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const CartDetails = () => {
    const id = useLoaderData()
    const [datas, setData] = useState([])


    // const [admission_date  ] = datas;

    useEffect(() => {
        fetch("https://book-college-services-server-site.vercel.app/college").then(res => res.json()).then(data => {
            const singleData = data.find(dat => id == dat._id)
            console.log(singleData)
            setData(singleData)
        })
    }, [])
    // console.log('rahim', datas);

    const even = datas?.event
    const researchWorks = datas?.research_works
    const sportsCategories = datas?.sports_categories
    console.log(sportsCategories)

    return (
        <div className='w-[90%] mx-auto my-16'>
            <div className='w-[60%] mx-auto'>
                <img className=' h-[500px] mx-auto' src="https://t4.ftcdn.net/jpg/04/22/24/49/360_F_422244902_ulvbCnVfyp7Wo0qbX4cntEIaOR4n8VVt.jpg" alt="" />
                <h1 className='my-6'><span className='text-2xl font-semibold'>College Name : </span><span className='text-2xl'>{datas?.college_name}</span></h1>
                {/* <h1><span className='text-2xl font-semibold'>Admission Process : </span>{datas?.}</h1> */}
                <div className='flex mt-4'>
                    <span className='w-[205px] text-xl font-semibold'>Events Details :</span>
                    <div className='flex  border-2 p-4'>
                        {
                            even?.map(r => <div>
                                <h1 className='mt-3'><span className='font-semibold'>Event-Name</span> : {r.name}</h1>
                                <h1><span className='font-semibold'>Date</span> : {r.date}</h1>
                                <h1><span className='font-semibold'>Location</span> : {r.location}</h1>
                                <h1 className='mb-3'><span className='font-semibold'>Description</span> : {r.description}</h1>
                            </div>)
                        }
                    </div>
                </div>
                <div className='flex mt-4'>
                    <span className='w-[197px] text-xl font-semibold'>Research :</span>
                    <div className='flex gap-2 border-2 p-4'>
                        {
                            researchWorks?.map(r => <div>
                                <h1 className='mt-3'><span className='font-semibold'>Title</span> : {r.title}</h1>
                                <h1><span className='font-semibold'>Publication Date</span> : {r.publication_date}</h1>
                                <h1><span className='font-semibold'>Abstract</span> : {r.abstract}</h1>
                            </div>)
                        }
                    </div>
                </div>
                <div className='flex mt-4'>
                    <span className='w-[197px] text-xl font-semibold'>Sports :</span>
                    <div className='flex gap-2 border-2 p-4'>
                        {
                            sportsCategories?.map(r => <div>
                                <h1 className='mt-3'><span className='font-semibold'>Name</span> : {r.name}</h1>
                                <h1><span className='font-semibold'>Team_count</span> : {r.team_count}</h1>
                                <h1><span className='font-semibold'>Description</span> : {r.description}</h1>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;