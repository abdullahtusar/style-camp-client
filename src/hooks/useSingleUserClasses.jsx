import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";



const useSingleUserClasses = () =>{
    const { user } = useAuth();
    //const [menu, setMenu] = useState([]);
    //const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-chi-seven.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, []);
    const {data: singleUserClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() =>{
            const res = await fetch(`https://b7a12-summer-camp-server-side-abdullahtusar.vercel.app/classes?email=${user?.email}`);
            return res.json();
        }
    })
    return [singleUserClasses, loading, refetch];
}

export default useSingleUserClasses;