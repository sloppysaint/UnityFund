import React from 'react'

const VideoBanner = () => {
  return (
    <div className='bg-primary'>
        <div className="container py-8 md:py-16">
            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 md:gap-8">
                {/* video section */}
                <div>
                <iframe 
                  src="https://www.youtube.com/embed/CiFoHm7HD94?si=J6mqXdteb9Ge3rf6" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen
                  className = "aspect-video w-full"
                  >
                  
                  </iframe>
                </div>
                {/* text-section */}
                <div className='space-y-4 text-center md:text-left text-white'>
                    <h1 className='text-4xl font-bold'>Watch Our Video</h1>
                    <p>Learn more about our company and what we do. Discover how Unity Fund is making a tangible difference in the lives of underprivileged communities, empowering individuals through education, resources, and sustainable support. Our journey is filled with inspiring stories of transformation, and we invite you to be a part of this impactful movement.</p>
                    <button className='btn-primary !bg-white !text-black'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoBanner
