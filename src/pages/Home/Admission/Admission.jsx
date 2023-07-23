import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Admission = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        fetch("https://book-college-services-server-site-mdsahjalalrahim-gmailcom.vercel.app/college").then(res => res.json()).then(data => setData(data))
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        const from = event.target;
        const CandidateName = from.CandidateName.value;
        const Subject = from.Subject.value;
        const Email = from.Email.value;
        const Phone = from.Phone.value;
        const address = from.address.value;
        const Image = from.Image.value;
        console.log(CandidateName, Subject, Email, Phone, address, Image)
    }

    return (
        <>
            <h1 className='text-center text-3xl font-semibold mt-16'>College Name</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 mb-[23%]'>

                {
                    datas.map((data , index)=> <div key={data._id} className='mx-auto'>
                        <span className='text-3xl pr-3'>{index}.</span>
                        <label htmlFor="my_modal_6" className='link link-primary text-3xl border p-2 hover:bg-slate-600 hover:text-white'>{data.college_Name}</label>
                    </div>)
                }
            </div>


            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
                        <div>
                            <span>Candidate Name</span>
                            <input className='mt-2 bg-black text-white py-2 px-3 rounded-lg' placeholder='Candidate Name' name='CandidateName' type="text" required />
                        </div>
                        <div>
                            <span>Subject</span>
                            <input className='mt-2 bg-black text-white py-2 px-3 rounded-lg' placeholder='Subject' name='Subject' type="text" required />
                        </div>
                        <div>
                            <span>Email</span>
                            <input className='mt-2 bg-black text-white py-2 px-3 rounded-lg' placeholder='Email' name='Email' type="email" required />
                        </div>
                        <div>
                            <span>Phone</span>
                            <input className='mt-2 bg-black text-white py-2 px-3 rounded-lg' placeholder='Phone' name='Phone' type="number" required />
                        </div>
                        <div>
                            <span>address</span>
                            <input className='mt-2 bg-black text-white py-2 px-3 rounded-lg' placeholder='address' name='address' type="text" required />
                        </div>
                        <div>
                            <span>Your Image</span>
                            <input className='mt-2 bg-black text-white py-2 px-3 rounded-lg' placeholder='Your Image' name='Image' type="text" required />
                        </div>
                        <div>
                            <span> date of birth</span>
                            <input className='mt-2 bg-black text-white py-2 px-3 rounded-lg' placeholder=' date of birth' type="text" required />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">
                                <input type="submit" value="submit" />
                            </label>
                        </div>
                    </form>
                    {/* <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close</label>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Admission;