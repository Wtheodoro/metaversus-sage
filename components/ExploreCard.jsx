// user client is for next js 13.
// https://beta.nextjs.org/docs/rendering/server-and-client-components
'use client'

import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn } from '../utils/motion'

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px]
    transition-[flex] duration-700 ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className='absolute w-full h-full object-cover rounded-3xl'
    />
    {active !== id ? (
      <h3 className='font-semibold sm:text-2xl text-lg text-white absolute z-0 lg:bottom-20 md:-rotate-90 lg:origin-[0, 0]'>
        {title}
      </h3>
    ) : (
      <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-black/50 rounded-b-3xl'>
        <div
          className={`${styles.flexCenter} w-16 h-16 rounded-3xl glassmorphism mb-4`}
        >
          <img
            src='/headset.svg'
            alt='headset'
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
        <p className='font-normal text-base leading-5 text-white uppercase'>
          Enter the Metaverse
        </p>
        <h2 className='mt-6 font-semibold sm:text-3xl text-2xl text-white'>
          {title}
        </h2>
      </div>
    )}
  </motion.div>
)

export default ExploreCard
