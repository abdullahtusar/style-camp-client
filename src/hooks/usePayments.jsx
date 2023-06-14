import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const usePayments = () =>{
    const {user} = useAuth()
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
    const {data: myPayments = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/payments?email=${user?.email}`);
            return res.json();
        }
    })
    return [myPayments, loading, refetch];
}

export default usePayments;