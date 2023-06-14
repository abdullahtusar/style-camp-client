import  { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
//import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
                console.log(loggedUser);
                // Swal.fire({
                //     title: 'Logged in Successfully!!',
                //     showClass: {
                //       popup: 'animate__animated animate__fadeInDown'
                //     },
                //     hideClass: {
                //       popup: 'animate__animated animate__fadeOutUp'
                //     }
                //   });
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, image:loggedUser.photoURL, role: "student"}
                fetch(`https://b7a12-summer-camp-server-side-abdullahtusar.vercel.app/users`, {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                 navigate(from, { replace: true });
                            })
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                 <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;