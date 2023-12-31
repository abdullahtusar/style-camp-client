import { useQuery } from "@tanstack/react-query";

const useClasses = () =>{
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
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() =>{
            const res = await fetch('https://b7a12-summer-camp-server-side-abdullahtusar.vercel.app/classes');
            return res.json();
        }
    })
    return [classes, loading, refetch];
}

export default useClasses;