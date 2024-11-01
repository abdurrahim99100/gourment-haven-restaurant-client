import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


// TODO: 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    return (
        <>
            <SectionTitle subHeading={'Fast & secure checkout'} heading={'Complete Your Payment'} />
            <section>
                <Elements stripe={stripePromise} >
                    <CheckoutForm />
                </Elements>
            </section>
        </>
    );
};

export default Payment;