import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddAClass = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { className, photoURL, instructorName, email, availableSeat, price } = data;
        const classData = { className, image: photoURL, instructorName, email, availableSeat: parseInt(availableSeat), price: parseFloat(price) }
        fetch(`http://localhost:5000/classes`, {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(classData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
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

                <div className='flex gap-5 my-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Name*</span>
                        </label>
                        <input type="text" {...register("instructorName", {required: true})} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Email*</span>
                        </label>
                        <input type="email" {...register("email", {required: true})} className="input input-bordered w-full" />
                    </div>
                </div>

                <div className='flex gap-5 my-4'>
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
                <input className='btn btn-neutral btn-md mt-6 bg-[#24a9e1] w-full text-white border-0' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddAClass;