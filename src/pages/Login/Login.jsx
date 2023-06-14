import { Helmet } from 'react-helmet-async';
import loginImage from '../../assets/Fashion_Slider1.jpg'
import { FaEye } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'Logged in Successfully!!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  });
                  navigate(from, { replace: true });
            })
    }
    return (
        <>
            <Helmet>
                <title>Style Camp | Login</title>
            </Helmet>
            <div className='mx-auto max-w-screen-2xl md:px-4 text-black'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col-reverse lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img className='rounded-2xl w-11/12 hidden md:block' src={loginImage} />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-xs md:max-w-lg shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <h1 className="text-3xl font-bold text-center">Login</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" />
                                    <label className='absolute bottom-0 right-0'>
                                        <span className='btn btn-md bg-inherit border-0' onClick={handleTogglePassword}><FaEye></FaEye></span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-outline text-white bg-[#24a9e1] border-0" value="Login" />
                                </div>
                                <div className='text-center'>
                                <p><small>New here? <Link to="/signup" className='underline font-bold text-[#24a9e1]'>Create A New Account</Link></small></p>
                                <SocialLogin></SocialLogin>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;