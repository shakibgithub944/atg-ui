import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user = useLoaderData({})
    return (
        <div className='h-100'>
            {
                <div className=''>
                    <div className='text-center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='w-25' alt="" />
                        <h2 className='mb-5'>{user?.profile?.username}</h2>
                    </div>

                    <div className="mb-3 w-50 mx-auto">
                        <input type="email" disabled value={user?.Bio} className="form-control p-3" />
                    </div>
                    <div className="mb-3 w-50 mx-auto">
                        <label className="form-label fw-bold">Full Name</label>
                        <input type="email" disabled value={user?.profile?.firstName + ' ' + user?.profile?.lastName} className="form-control p-2" />
                    </div>
                    <div className="mb-3 w-50 mx-auto">
                        <label className="form-label fw-bold">Job Title</label>
                        <input type="email" disabled value={user?.jobTitle} className="form-control p-2" />
                    </div>
                    <div className="mb-3 w-50 mx-auto">
                        <label className="form-label fw-bold">Email</label>
                        <input type="email" disabled value={user?.profile?.email} className="form-control p-2" />
                    </div>
                </div>     
            }
        </div>
    );
};

export default UserDetails;