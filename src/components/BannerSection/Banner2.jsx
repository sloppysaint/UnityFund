import React from 'react'
import Image from "/public/Image2.jpg"

const Banner2 = () => {
  return (
    <div className='bg-slate-100 dark:bg-slate-900 dark:text-white'>
        <div className='container md:h-[500px] flex items-center justify-center py-10'>
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                
                {/* text container */}
                <div className='lg:max-w-[400px] space-y-6'>
                    <h1 className='text-2xl font-semibold md:text-4xl mb-4'>Make a Difference Today</h1>
                    <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                        <li className='font-medium'>
                            Compassion is the currency that leads to lasting change.
                        </li>
                        <li className='font-medium'>
                            Small acts, when multiplied by millions of people, can transform the world.
                        </li>
                        <li className='font-medium'>
                            The joy of giving is the true reward; no act of kindness is ever wasted.
                        </li>
                    </ul>
                    <button className='btn-primary'>Get Started</button>
                </div>
                {/* img container */}
                <div>
                    <img src={Image} alt="" className='mx-auto w-full
                    p-4 md:max-w-full h-[300px] md:h-[350px] object-cover
                    rounded-3xl '/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner2;
