import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useClasses from "../../../hooks/useClasses";
import Swal from "sweetalert2";

const Classes = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin]  = useAdmin();
    const [isInstructor]  = useInstructor();
    const [, , refetch ] = useClasses();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/approved_classes')
        return res.data;
    })
    console.log(classes);


    const navigate = useNavigate();
    const location = useLocation();
    const handleSelectClass = (_class) => {
        console.log(_class);
        const {_id, className, image, price} = _class;
        if (user && user.email) {
            const selectClass = { classId: _id, className, image, price, email: user.email };
            fetch('https://b7a12-summer-camp-server-side-abdullahtusar.vercel.app/selected_classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    refetch(); //refetch to update the number of cart item
                    if (data.insertedId) {
                        console.log(data)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class is added on the selected dashboard!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login To Order The Food!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <>
            <Helmet>
                <title>Style Camp | Classes</title>
            </Helmet>
            <div className='mx-auto max-w-screen-2xl md:px-4'>
                <div>
                    <div className="hero rounded" style={{ backgroundImage: `url("https://i.ibb.co/K5BZwFm/Pattern-Cutting-10.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold py-10 w-full">OUR OFFERED CLASSES</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-4 md:p-12 grid md:grid-cols-3 gap-5 md:gap-12 justify-center text-justify'>
                        {
                            classes.map(approved_class => <div key={approved_class._id}>
                                <div className="card w-96 bg-base-300 shadow-xl">
                                    <figure className="">
                                        <img src={approved_class.image} alt="Shoes" className="w-full h-[250px]" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{approved_class.className}</h2>
                                        <p><span className="font-semibold">Instructor:</span> {approved_class.instructorName}</p>
                                        <p><span className="font-semibold">Price:</span> ${approved_class.price}</p>
                                        <div className="card-actions">
                                        <button onClick={() => handleSelectClass(approved_class)} disabled={isAdmin || isInstructor} className="btn btn-neutral btn-md text-white bg-[#24a9e1] border-0">Select  Class</button>
                                        </div>
                                        <p className="bg-red-600 bg-opacity-80 text-white rounded px-2 absolute top-0 right-0">Available Seat: {approved_class.availableSeat}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Classes;