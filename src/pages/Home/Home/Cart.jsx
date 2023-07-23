import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        fetch("https://book-college-services-server-site-mdsahjalalrahim-gmailcom.vercel.app/college").then(res => res.json()).then(data => {
            const redata = data.slice(0,3);
            setData(redata)
        })
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 lg:mx-20 mt-10 ">

            {
                datas.map(data => <div key={data._id} className="mx-auto w-[100%] lg:w-[100%] border-2 border-[#686666c7] px-4 py-3">
                    {/* <img className="w-full" src={data.collegeImage} alt="" /> */}
                    <img className='' src="https://t4.ftcdn.net/jpg/04/22/24/49/360_F_422244902_ulvbCnVfyp7Wo0qbX4cntEIaOR4n8VVt.jpg" alt="" />
                    <h1 className='text-2xl font-semibold mt-4 '><span className='font-bold'>College Name: </span>{data.college_name}</h1>
                    <h3 className='font-medium text-md my-1'><span className='text-xl font-semibold'>Admission Dates: </span>{data.admission_date}</h3>
                    <h3 className='font-medium text-md my-1'><span className='text-xl font-semibold'>Research History: </span>{data.researchHistory}</h3>
                    <h3>events: <span>{data.events}</span></h3>
                    <h3>sports: <span>{data.sports}</span> </h3>
                    <Link  to={`/CartDetails/${data._id}`} className="btn btn-outline btn-error mt-8">Details</Link>
                </div>)
            }
        </div>
    );
};

export default Cart;