import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
//import useClasses from '../../../hooks/useClasses';

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/approved_classes')
        return res.data;
    })
    return (
        <>
            <h2 className="text-6xl font-extrabold text-center text-[#24a9e1] py-6 underline">Our Popular Classes</h2>

            <div className='w-full p-4 md:p-12 grid md:grid-cols-3 justify-center gap-5 md:gap-12 text-justify'>
                {
                    classes.slice(0, 6).map(approved_class => <div key={approved_class._id}>
                        <div className="card w-96 bg-base-300 shadow-xl">
                            <figure className="">
                                <img src={approved_class.image} alt="Shoes" className="w-full h-[250px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{approved_class.className}</h2>
                                <p><span className="font-semibold">Instructor:</span> {approved_class.instructorName}</p>
                                <p><span className="font-semibold">Price:</span> ${approved_class.price}</p>
                                <div className="card-actions">
                                    {/* <button onClick={() => handleSelectClass(approved_class)} disabled={isAdmin || isInstructor} className="btn btn-neutral btn-md text-white bg-[#24a9e1] border-0">Select  Class</button> */}
                                </div>
                                <p className="bg-red-600 bg-opacity-80 text-white rounded px-2 absolute top-0 right-0">Available Seat: {approved_class.availableSeat}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularClasses;