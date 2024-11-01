import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [paymentTransactionId, setPaymentTransactionId] = useState("");
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    const stripe = useStripe();
    const element = useElements();
    const totalPrice = cart.reduce((total, items) => total + items.price, 0);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    // console.log("total price",totalPrice); total price is ok;


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log("client secret=>", res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement);

        if (card === null) {
            return
        }

        // use your card elements with other stripe.js APIS;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('payment error', error)
            setError(error.message)
        } else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // conf payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        });
        if (confirmError) {
            console.log('confirm error', confirmError);
        } else {
            console.log(paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setPaymentTransactionId(paymentIntent.id);
            }

            // now sev this payment in the database;
            const payment = {
                email: user?.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartIds: cart.map(item => item._id),
                menuItemIds: cart.map(item => item.menuItemId),
                status: 'pending'
            }

            const res = await axiosSecure.post('/payment', payment);
            console.log('card response', res)

            if (res.data.delateResult.deletedCount > 0) {
                refetch();
            }
            if (res.data.paymentResult.insertedId) {
                navigate('/dashboard/user-payment-history')
            }

        };
    };


    return (
        <form onSubmit={handleSubmit} className="w-[860px]">
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
            <button type="submit" className="btn btn-success mt-6 text-xl w-[100px] bg-yellow-500 border-none" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600 text-xl mt-10">{error}</p>
            {paymentTransactionId && <p className="text-xl mt-10">Success payment TransactionId : <span className="text-green-600">{paymentTransactionId}</span></p>}
        </form>
    );
};

export default CheckoutForm;