import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/approved_classes')
        return res.data;
    })
    console.log(classes);
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
                                            <button className="btn btn-neutral btn-md text-white bg-[#24a9e1] border-0">Select  Class</button>
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