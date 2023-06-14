import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddAClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { className, photoURL, instructorName, email, availableSeat, price } = data;
        const classData = { className, image: photoURL, instructorName, email, availableSeat: parseInt(availableSeat), price: parseFloat(price), status: "Pending", enrolled_students: 0 }
        // fetch(`https://b7a12-summer-camp-server-side-abdullahtusar.vercel.app/classes`, {
        //     method: 'POST',
        //     headers:{
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(classData)
        // })
        // .then(res => res.json())
        // .then(data => {
        //         console.log('After Posting New Class', data.data);
        //         if(data.data.insertedId){
        //             reset();
        //             Swal.fire({
        //                 position: 'top-end',
        //                 icon: 'success',
        //                 title: 'Your Class is successfully added!',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //               })
        //         }
        //     })

        axiosSecure.post(`/classes`, classData)
        .then(data => {
            console.log('After Posting New Class', data.data);
            if(data.data.insertedId){
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Class is successfully added!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='w-10/12 mx-auto'>
            <Helmet>
                <title>Style Camp | Add A Class</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)} className='bg-base-200 p-12 rounded-lg'>
                <h2 className="text-3xl font-bold text-center text-[#24a9e1]">ADD A CLASS</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Class name*</span>
                    </label>
                    <input type="text" placeholder="Class Name" {...register("className", {required: true, maxLength: 120})}
                        className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL*</span>
                    </label>
                    <input type="text" placeholder="Photo URL"
                      {...register("photoURL", { required: true })}  className="input input-bordered w-full" />
                </div>

                <div className='md:flex gap-5 my-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Name*</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} {...register("instructorName", {required: true})} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Email*</span>
                        </label>
                        <input type="email" defaultValue={user?.email} {...register("email", {required: true})} className="input input-bordered w-full" />
                    </div>
                </div>

                <div className='md:flex gap-5 my-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seat*</span>
                        </label>
                        <input type="number" {...register("availableSeat", {required: true})} placeholder="Available Seat" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" {...register("price", {required: true})} placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>
                <input className='btn btn-neutral btn-md mt-6 bg-[#24a9e1] w-full text-white border-0' type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddAClass;