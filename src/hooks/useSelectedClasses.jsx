import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClasses = () =>{
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
    const {data: selectedClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/selected_classes?email=${user?.email}`);
            return res.json();
        }
    })
    return [selectedClasses, loading, refetch];
}

export default useSelectedClasses;