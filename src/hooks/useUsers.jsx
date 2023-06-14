import { useQuery } from "@tanstack/react-query";

const useUsers = () =>{
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
    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    })
    return [users, loading, refetch];
}

export default useUsers;