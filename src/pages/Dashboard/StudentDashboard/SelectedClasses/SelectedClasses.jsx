import { Link } from "react-router-dom";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import Swal from "sweetalert2";


const SelectedClasses = () => {
    const [selectedClasses, , refetch] = useSelectedClasses();
    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/selected_classes/${item._id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success')
                }
              })
            }
          })
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className="text-3xl font-bold text-center text-[#24a9e1]">MY SELECTED CLASSES</h2>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((own_class, index) => <tr
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
                                <td>
                                    <Link to={`/dashboard/payment?id=${own_class._id}&price=${own_class.price}`}>
                                        <button className="btn btn-sm btn-neutral bg-green-600 border-0  mr-5 text-white">Pay</button>
                                    </Link>
                                    <button onClick={() => handleDelete(own_class)} className="btn btn-sm btn-neutral bg-red-600 border-0 text-white">Remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;