import CountdownTimer from "../../Shared/CountdownTimer/CountdownTimer";
import Banner from "../Banner/Banner";
import './Home.css'


const Home = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 68);
    return (
        //
        <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex justify-center items-center text-white">
                <div className="absolute z-10 hidden md:block bg-neutral-800 md:px-8 lg:px-24 py-8 bg-opacity-70 rounded-lg">
                    <CountdownTimer targetDate={targetDate} />
                </div>
                <Banner></Banner>
            </div>

        </div>
    );
};

export default Home;