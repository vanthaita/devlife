import React from 'react'
import Marquee from 'react-fast-marquee'

const NewsMarquee = () => {
    return (
        <div>
            <Marquee className='h-20 border-b-2 border-black'>
                <p className='font-medium text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit id sapien tincidunt pellentesque vel non velit. Vestibulum nec velit vel felis semper malesuada. Nullam convallis, enim vel convallis feugiat, mauris ipsum condimentum nunc, non viverra nunc velit vel turpis.</p>
            </Marquee>
        </div>
    )
}

export default NewsMarquee