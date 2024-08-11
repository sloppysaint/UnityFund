// import React from 'react';
// import HeroImg from "/public/slum.jpg";
// import { motion } from "framer-motion";
// import { loadStripe } from "@stripe/stripe-js";


// const stripePromise = loadStripe("");

// const stripe = Stripe(''); 
// const elements = stripe.elements();

// const cardElement = elements.create('card');
// cardElement.mount('#card-element');

// const bgStyle = {
//     backgroundImage: `url(${HeroImg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: '50% 30%',
//     backgroundRepeat: "no-repeat",
//     width: "100%",
// };

// const FadeUp = (delay) => {
//     return {
//         initial: {
//             opacity: 0,
//             y: 100,
//         },
//         animate: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 delay: delay,
//             }
//         }
//     }
// };

// const Hero = () => {
//     const [data, setData] = React.useState({
//         name: "",
//         email: "",
//         amount: 1000,
//     });

//     const handleClick = (e) => {
//         const name = e.target.name;
//         setData((previousData) => ({
//             ...previousData,
//             [name]: e.target.value,
//         }));
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//             console.log("here I am there")
//         const stripe = await stripePromise;

//         // Call your backend to create a PaymentIntent
//         const response = await fetch("http://localhost:8000/api/v1/checkout", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 amount: data.amount * 100, // Stripe expects amount in the smallest currency unit
//                 currency: "USD",
//                 paymentMethodId: "pm_card_visa" 
//             }),
//         });

//         const paymentIntent = await response.json();
//         console.log(paymentIntent.paymentIntent.client_secret)
        
//         const { paymentMethod, error } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });
//         // Confirm the payment on the client side
//         const result = await stripe.confirmCardPayment(paymentIntent.paymentIntent.client_secret, {
//             payment_method: {
//                 card: {
//                     token: data.paymentMethodId, // Assuming you've collected this from your card input fields
//                 },
//                 billing_details: {
//                     name: data.name,
//                     email: data.email,
//                 },
//             },
//         });

//         if (result.error) {
//             console.error(result.error.message);
//         } else {
//             if (result.paymentIntent.status === 'succeeded') {
//                 alert('Payment successful!');
//             }
//         }
//     }

//     return (
//         <div style={bgStyle} className='pt-[70px]'>
//             <div className='min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-3 pb-10 md:pt-48'>
//                 <div className="container">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
//                         <div className='flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]'>
//                             <motion.h1
//                                 variants={FadeUp(0.2)}
//                                 initial="initial"
//                                 animate="animate"
//                                 className='text-5xl lg:text-7xl font-bold'>
//                                 Join Us in Changing Lives
//                             </motion.h1>
//                             <motion.p
//                                 variants={FadeUp(0.4)}
//                                 initial="initial"
//                                 animate="animate"
//                             >
//                                 Unity Fund is dedicated to empowering underprivileged communities by providing resources, education, and support to create sustainable change.
//                             </motion.p>
//                             <div className='space-x-4'>
//                                 <motion.button
//                                     variants={FadeUp(0.6)}
//                                     initial="initial"
//                                     animate="animate"
//                                     className='btn-primary'
//                                 >
//                                     Get Started
//                                 </motion.button>
//                                 <motion.button
//                                     variants={FadeUp(0.8)}
//                                     initial="initial"
//                                     animate="animate"
//                                     className='btn-outline'
//                                 >
//                                     Login
//                                 </motion.button>
//                             </div>
//                         </div>
//                         <motion.div
//                             initial={{ opacity: 0, x: 100 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ type: "spring", stiffness: 100 }}
//                             className='w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md'>
//                             <div>
//                                 <h1 className='text-lg text-center font-semibold'>Quick Donation Form</h1>
//                                 <div className='flex items-center justify-center gap-8 py-4'>
//                                     <button className='button-square' onClick={() => setData({ ...data, amount: 100 })}>₹100</button>
//                                     <button className='button-square' onClick={() => setData({ ...data, amount: 500 })}>₹500</button>
//                                     <button className='button-square' onClick={() => setData({ ...data, amount: 1000 })}>₹1000</button>
//                                     <button className='button-square' onClick={() => setData({ ...data, amount: 5000 })}>₹5000</button>
//                                 </div>
//                                 <div className='space-y-6'>
//                                     <input
//                                         type="number"
//                                         name='amount'
//                                         id='amount'
//                                         onChange={handleClick}
//                                         placeholder='Enter Amount'
//                                         defaultValue={1000}
//                                         value={data.amount}
//                                         min={100}
//                                         max={500000}
//                                         className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
//                                     />
//                                     <input
//                                         type="text"
//                                         name='name'
//                                         id='name'
//                                         onChange={handleClick}
//                                         placeholder='Name'
//                                         className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
//                                     />
//                                     <input
//                                         type='email'
//                                         name='email'
//                                         id='email'
//                                         onChange={handleClick}
//                                         placeholder='Email'
//                                         className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
//                                     />
//                                     <button
//                                         className='btn-primary w-full rounded-full'
//                                         onClick={handleSubmit}
//                                     >
//                                         Donate Now
//                                     </button>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;

import React from 'react';
import HeroImg from "/public/slum.jpg";
import { motion } from "framer-motion";

const bgStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 30%',  // Change 'top' to 'center'
    backgroundRepeat: "no-repeat",
    width: "100%",
};


const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: delay,  // Correctly applying the delay
            }
        }
    }
}

const Hero = () => {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        amount: 1000,
    });

    const handleClick = (e) => {
        const name = e.target.name;
        setData((previousData) => ({
            ...previousData,
            [name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div style={bgStyle} className='pt-[70px]'>
            <div className='min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-3 pb-10 md:pt-48'>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
                        {/* Hero Text section */}
                        <div className='flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]'>
                            <motion.h1 
                                variants={FadeUp(0.2)}
                                initial="initial"
                                animate="animate"
                                className='text-5xl lg:text-7xl font-bold'>
                                Join Us in Changing Lives
                            </motion.h1>
                            <motion.p
                                variants={FadeUp(0.4)}
                                initial="initial"
                                animate="animate"
                            >
                                Unity Fund is dedicated to empowering underprivileged communities by providing resources, education, and support to create sustainable change. Our mission is to uplift lives, foster growth, and build a brighter future for those who need it most. Join us in our journey to make a difference, one step at a time, and be a part of a global movement towards equality and opportunity for all.
                            </motion.p>
                            <div className='space-x-4'>
                                <motion.button
                                    variants={FadeUp(0.6)}
                                    initial="initial"
                                    animate="animate"
                                    className='btn-primary'
                                >
                                    Get Started
                                </motion.button>
                                <motion.button
                                    variants={FadeUp(0.8)}
                                    initial="initial"
                                    animate="animate"
                                    className='btn-outline'
                                >
                                    Login
                                </motion.button>
                            </div>
                        </div>
                        {/* Form section */}
                        <motion.div
                         initial={{opacity:0, x: 100}}
                         animate={{opacity:1, x:0}}
                         transition={{type: "spring", stiffness: 100}}
                         className='w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md'>
                            <div>
                                <h1 className='text-lg text-center font-semibold'>Quick Donation Form</h1>
                                <div className='flex items-center justify-center gap-8 py-4'>
                                    <button className='button-square' onClick={() => setData({...data, amount: 100})}>₹100</button>
                                    <button className='button-square' onClick={() => setData({...data, amount: 500})}>₹500</button>
                                    <button className='button-square' onClick={() => setData({...data, amount: 1000})}>₹1000</button>
                                    <button className='button-square' onClick={() => setData({...data, amount: 5000})}>₹5000</button>
                                </div>
                                {/* input section here */}
                                <div className='space-y-6'>
                                    <input 
                                        type="number"
                                        name='amount'
                                        id='amount'
                                        onChange={handleClick}
                                        placeholder='Enter Amount'
                                        defaultValue={1000}
                                        value={data.amount}
                                        min={100}
                                        max={500000}
                                        className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                                    />
                                    <input 
                                        type="text"
                                        name='name'
                                        id='name'
                                        onChange={handleClick}
                                        placeholder='Name'                                    
                                        className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'
                                    />
                                    <input 
                                        type='email'
                                        name='email'
                                        id='email'
                                        onChange={handleClick}
                                        placeholder='Email'
                                        className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'  
                                    />
                                    <button 
                                        className='btn-primary w-full rounded-full' 
                                        onClick={handleSubmit}
                                    >
                                        Donate Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
