import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users/instructors')
        return res.data;
    })
    return (
        <>
            <h2 className="text-6xl font-extrabold text-center text-[#24a9e1] py-6 underline">Our Popular Instructors</h2>
            <div className='w-full p-4 md:p-12 grid md:grid-cols-3 gap-5 md:gap-12 justify-center text-justify'>
                {
                    users.slice(0, 6).map(user => <div key={user._id}>
                        <div className="card w-96 bg-base-300 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={user.image} alt="Shoes" className="w-[100px] h-[100px] rounded-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.email}</p>
                                {/* <div className="card-actions">
                                    <Link to="/instructors"><button className="btn btn-neutral btn-md text-white bg-[#24a9e1] border-0">See More</button></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularInstructors;