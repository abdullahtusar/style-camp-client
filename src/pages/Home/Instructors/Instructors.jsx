import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users/instructors')
        return res.data;
    })
    console.log(users);
    return (
        <>
            <Helmet>
                <title>Style Camp | Instructors</title>
            </Helmet>
            <div className='mx-auto max-w-screen-2xl md:px-4'>
                <div>
                    <div className="hero rounded" style={{ backgroundImage: `url("https://i.ibb.co/K5BZwFm/Pattern-Cutting-10.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold py-10 w-full">OUR INSTRUCTORS</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-4 md:p-12 grid md:grid-cols-3 gap-5 justify-center text-justify'>
                        {
                            users.map(user => <div key={user._id}>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={user.image} alt="Shoes" className="w-[100px] h-[100px] rounded-full" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{user.name}</h2>
                                        <p>{user.email}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-neutral btn-md text-white bg-[#24a9e1] border-0">See More</button>
                                        </div>
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

export default Instructors;