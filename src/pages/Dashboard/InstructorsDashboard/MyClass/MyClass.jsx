import { FaEdit } from "react-icons/fa";
import useSingleUserClasses from "../../../../hooks/useSingleUserClasses";


const MyClass = () => {
    const [singleUserClasses, ,refetch] = useSingleUserClasses();
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className="text-3xl font-bold text-center text-[#24a9e1]">MY CLASSES</h2>
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
                            <th>Price</th>
                            <th>Total Enrolled Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleUserClasses.map((own_class, index) => <tr 
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
                                <td>${own_class.price}</td>
                                <td className="pl-16">
                                    {own_class.enrolled_students}
                                </td>
                                <td>
                                    {own_class.status}
                                </td>
                                <td>
                                    {/* <button className="btn bg-red-600 border-0"><FaTrashAlt className='text-white text-xl'></FaTrashAlt></button> */}
                                    {own_class?.feedback}
                                </td>
                                <td>
                                    <button className="btn bg-orange-600 border-0"><FaEdit className='text-white text-xl'></FaEdit></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;