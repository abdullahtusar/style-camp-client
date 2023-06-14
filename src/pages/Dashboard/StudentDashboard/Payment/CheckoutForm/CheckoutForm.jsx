import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import './CheckoutForm.css'
import useAuth from '../../../../../hooks/useAuth';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../../../../hooks/useSelectedClasses';
const CheckoutForm = ({price, id}) => {
    const[selectedClasses] = useSelectedClasses();
    console.log(price, id);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        if(price > 0){
            axiosSecure.post('/create-payment-intent', {price})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
        }

    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log('card info', card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('[payment method]', paymentMethod);
        }
        setProcessing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'Unknown',
                  name: user?.displayName || 'Anonymous',
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError);
          }
          console.log('Payment Intent', paymentIntent);
          setProcessing(false);
          if(paymentIntent.status === "succeeded"){
            setTransactionId(paymentIntent.id);
            //const transactionId = paymentIntent.id;
            //TO DO: Next Steps
            //save payment info to the server
            const payment = {
                email: user?.email, 
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                // quantity: cart.length,
                selectedClassId: id,
                // menuItems: cart.map(item => item.menuItemId),
                // status: 'service pending',
                // itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertResult.insertedId){
                    Swal.fire(
                        'Payment Confirm!',
                        'You clicked the button!',
                        'success'
                      )
                }
            })

          }
    }
  
    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn border-0 bg-[#24a9e1] btn-sm mt-4'>
                Pay
            </button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
        {transactionId && <p className='text-green-600'>Transaction Complete With TransactionId: {transactionId}</p>}
    </>
    );
  };

export default CheckoutForm;