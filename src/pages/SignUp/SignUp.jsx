import { Helmet } from "react-helmet-async";
import loginImage from '../../assets/Fashion_Slider1.jpg'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, getValues  } = useForm();
    const { createUser } = useContext(AuthContext);
    //const navigate = useNavigate();
    const password = getValues('password');

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                reset();
            })
        
    }
    return (
        <>
            <Helmet>
                <title>Style Camp | Register</title>
            </Helmet>
            <div className='mx-auto max-w-screen-2xl md:px-4 text-black'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col-reverse lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img className='rounded-2xl w-11/12 hidden md:block' src={loginImage} />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-xs md:max-w-lg shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600 text-sm pt-[1px]'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className='text-red-600 text-sm pt-[1px]'>Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600 text-sm pt-[1px]'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" id="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type == 'required' && <span className='text-red-600 text-sm pt-[1px]'>Password is required</span>}
                                    {errors.password?.type == 'pattern' && <span className='text-red-600 text-sm pt-[1px]'>Password must be one uppercase, one lowercase, one number abd one special character</span>}
                                    {errors.password?.type == 'minLength' && <span className='text-red-600 text-sm pt-[1px]'>Password must be 8 character</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" id="confirmPassword" {...register("confirmPassword", {
                                        required: 'Confirm Password is required',
                                        validate: (value) => value === password || 'Passwords do not match',
                                    })} name="confirmPassword" placeholder="confirm password" className="input input-bordered" />
                                    {errors.confirmPassword && <span className="text-red-600 text-sm pt-[1px]">{errors.confirmPassword.message}</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-outline text-white bg-[#24a9e1] border-0" value="Sign Up" />
                                </div>
                                <div className='text-center'>
                                    <p><small>Already have an account? <Link to="/login" className='underline font-bold text-[#24a9e1]'>Please login</Link></small></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;