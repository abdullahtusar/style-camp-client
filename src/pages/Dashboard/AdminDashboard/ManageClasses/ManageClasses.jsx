import React from 'react';
import useClasses from '../../../../hooks/useClasses';
import { FaEdit } from 'react-icons/fa';

const ManageClasses = () => {
    const [classes, , refetch] = useClasses();
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className="text-3xl font-bold text-center text-[#24a9e1]">MANAGE CLASSES</h2>
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((own_class, index) => <tr
                                key={own_class._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={own_class.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {own_class.className}
                                </td>
                                <td>
                                    {own_class.instructorName}
                                </td>
                                <td>
                                    {own_class.email}
                                </td>
                                <td>
                                    {own_class.availableSeat}
                                </td>
                                <td>${own_class.price}</td>
                                {/* <td>
                                     <button className="btn btn-ghost btn-xs">details</button> 
                                </td> */}
                                <td>
                                    {own_class.status}
                                </td>
                                <td>
                                        <button className="btn btn-sm mr-3 bg-green-600 text-white border-0">Approved</button>
                                        <button className="btn btn-sm mr-3 bg-yellow-500 text-white border-0">Pending</button>
                                        <button className="btn btn-sm mr-3 bg-red-600 text-white border-0">Denied</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;