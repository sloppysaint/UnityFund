import React from 'react';
import HeroImg from "/public/slum.jpg";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const bgStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 30%',  
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
                delay: delay,  
            }
        }
    }
}

const Hero = () => {
    const navigate = useNavigate(); // Hook for navigation
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
        navigate('/donate', { state: data });  // Navigate to Donate page with form data
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
                                Unity Fund is dedicated to empowering underprivileged communities by providing resources, education, and support to create sustainable change. Join us in our journey to make a difference.
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
                                <div className='flex items-center justify-center gap-[18px]  py-3'>
                                    <button className='button-square  text-sm md:text-base lg:text-lg' onClick={() => setData({...data, amount: 100})}>₹100</button>
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
