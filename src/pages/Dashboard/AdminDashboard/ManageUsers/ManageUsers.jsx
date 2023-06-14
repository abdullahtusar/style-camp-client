import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <>
            <div className='w-11/12 mx-auto'>
                <Helmet>
                    <title>Style Camp | Manage Users</title>
                </Helmet>
                <h2 className="text-3xl font-bold text-center text-[#24a9e1]">MANAGE USERS</h2>
                <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
                {/* teble */}
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action Admin</th>
                                <th>Action Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        {/* user.role === 'admin' ? 'admin' : <button className="btn bg-orange-600 onClick={() => handleMakeAdmin(user)} border-0"><FaUserShield className='text-white text-xl'></FaUserShield></button> */}
                                        <button disabled={user.role === 'admin' || user.role === 'instructor'} onClick={() => handleMakeAdmin(user)} className="btn btn-neutral btn-sm mr-3 bg-sky-600 text-white border-0">Make Admin</button>
                                    </td>
                                    <td>
                                        <button disabled={user.role === 'admin' || user.role === 'instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-neutral btn-sm mr-3 bg-yellow-500 text-white border-0">Make Instructor</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageUsers;