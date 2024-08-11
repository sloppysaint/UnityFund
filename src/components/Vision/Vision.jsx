import { animate } from 'framer-motion'
import React from 'react'
import {motion} from "framer-motion";

const fadeAnimation = (delay) => {
    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut"
            }
        }
    }
}

const Vision = () => {
  return (
    <div className='container my-16 bg-white dark:bg-gray-900 dark:text-white'>
        <div 
        className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <motion.div 
            initial="initial" 
            whileInView="animate" 
            variants = {fadeAnimation(0.2)}
            className='mx-5 md:mx-8 px-6 py-10 space-y-4
            shadow-lg border-t-8 border-green-800 dark:bg-slate-800'>
                <h1 className='text-xl font-semibold'>Our Vision</h1>
                <p>At Unity Fund, our vision is a world 
                    where every individual, regardless of
                     their background or circumstances, has the opportunity to thrive. We believe in breaking the cycle of poverty through education, empowerment, and community support. Our goal is to create lasting change by uniting people and
                     resources to build stronger, more resilient
                      communities, paving the way for a brighter, more equitable future for all. We envision a society where opportunity is not a privilege but a right, where every person can contribute meaningfully and achieve their dreams.
                </p>
                <a href="#" className='inline-block hover:text-primary 
                border-b-2 hover:border-primary'>
                    Learn More
                </a>
                
            </motion.div>
            <motion.div
              initial="initial" 
              whileInView="animate" 
              variants = {fadeAnimation(0.4)}
             className='mx-5 md:mx-8 px-6 py-10 space-y-4
            shadow-lg border-t-8 border-yellow-800 dark:bg-slate-800'>
                <h1 className='text-xl font-semibold'>Our Mission</h1>
                <p>Our mission at Unity Fund is to bridge the gap between those who have t
                    he resources and those who need them the most. 
                    We are committed to fostering growth, education, and 
                    self-sufficiency in underprivileged communities by providing targeted support
                    , innovative programs, and sustainable solutions.
                     Through collaboration and compassion, we aim to empower individuals to break free from the constraints of poverty, 
                     ensuring that every person has the chance to realize their full potential. Together, we strive to build a future where no one is left behind.
                </p>
                <a href="#" className='inline-block hover:text-primary 
                border-b-2 hover:border-primary'>
                    Learn More
                </a>
                
            </motion.div>
            
                
            
        </div>
    </div>
  )
}

export default Vision