import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
//import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { useLocation } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
const Payment = () => {
    //const [selectedClasses] = useSelectedClasses()
    //const price = selectedClasses.reduce((sum, item) => sum + item.price, 0);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");
    const price = queryParams.get("price");
    return (
        <div className='w-2/3 mx-auto'>
            <h2 className="text-3xl font-bold text-center text-[#24a9e1]">PAY NOW</h2>
            <h2 className='font-semibold mb-6'>Please Put Your Card Information Below:</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} id={id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;