import Countdown from 'react-countdown';


const CountdownTimer = ({ targetDate }) => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Handle countdown completion
            return <span>Countdown completed!</span>;
        } else {
            // Render the countdown and remaining days
            return (
                <>
                    <div className='text-center'>
                        <p className='text-lg unique-font'>The Best</p>
                        <h2 className='text-6xl py-3 font-bold'>Summer Camp</h2>
                        <p className='text-lg pb-3 unique-font'>Starts in</p>
                    </div>
                    <div className='flex gap-4 md:gap-24 justify-center items-center text-center'>
                        <div>
                            <p className='bg-white p-4 px-5 text-black text-2xl font-bold mb-4 rounded-2xl'>{days}</p>
                            <p>DAYS</p>
                        </div>
                        <div>
                            <p className='bg-white p-4 px-5 text-black text-2xl font-bold mb-4 rounded-2xl'>{hours}</p>
                            <p>HOURS</p>
                        </div>
                        <div>
                            <p className='bg-white p-4 text-black text-2xl font-bold mb-4 rounded-2xl'>{minutes}</p>
                            <p>MINUTES</p>
                        </div>
                        <div>
                            <p className='bg-white p-4 text-black text-2xl font-bold mb-4 rounded-2xl'>{seconds}</p>
                            <p>SECONDS</p>
                        </div>
                    </div>
                </>
            );
        }
    };

    return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;