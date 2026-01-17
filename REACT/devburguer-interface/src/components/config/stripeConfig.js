
import { loadStripe } from "@stripe/stripe-js";


export const stripePromise = loadStripe(
    'pk_live_51SnBlrJe9yn9dnSX2mtM6cqfcIBACLjFwDE4f32mwzpgXJSQYdA2avXNDbLGjUqGrre7hn7METkElyElxSgD7gzp00bo5ieeaG'
);  

export default stripePromise;