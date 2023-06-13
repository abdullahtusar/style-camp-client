import useClasses from '../../../../hooks/useClasses';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [classes, , refetch] = useClasses();
    console.log(classes)
    const [axiosSecure] = useAxiosSecure();

    //const [{_id}] = classes;
    const handleApproveConfirm = id => {
        axiosSecure.patch(`/classes/${id}`, { status: 'Approved' })
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    refetch();
                    //update status
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Status is successfully Updated!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    const handlePendingConfirm = id => {
        axiosSecure.patch(`/classes/${id}`, { status: 'Pending' })
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    refetch();
                    //update status
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Status is successfully Updated!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    const handleDeniedConfirm = id => {
        axiosSecure.patch(`/classes/${id}`, { status: 'Denied' })
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    refetch();
                    //update status
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Status is successfully Updated!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    const handleFeedback = async (id) => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Feedback',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          })
          
          if (text) {
            Swal.fire(text);
            axiosSecure.put(`/classes/${id}`, {feedback : text})
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Feedback is successfully added!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
          }
    }


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
                                key={own_class._id}
                                >
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
                                    <button disabled={own_class.status === 'Approved' || own_class.status === 'Denied'} onClick={() => handleApproveConfirm(own_class._id)} className="btn btn-neutral btn-sm mr-3 bg-green-600 text-white border-0">Approved</button>
                                    <button disabled={own_class.status === 'Pending' || own_class.status === 'Denied'} onClick={() => handlePendingConfirm(own_class._id)} className="btn btn-neutral btn-sm mr-3 bg-yellow-500 text-white border-0">Pending</button>
                                    <button disabled={own_class.status === 'Approved' || own_class.status === 'Denied'} onClick={() => handleDeniedConfirm(own_class._id)} className="btn btn-neutral btn-sm mr-3 bg-red-600 text-white border-0">Denied</button>
                                    <button onClick={() => handleFeedback(own_class._id)} disabled={own_class.status === 'Pending'} className="btn btn-neutral btn-sm mr-3 bg-sky-600 text-white border-0">Feedback </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;