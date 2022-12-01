// user client is for next js 13.
// https://beta.nextjs.org/docs/rendering/server-and-client-components
'use client'

import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex flex-col justify-center items-center relative z-10'>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className='flex flex-row justify-center items-center'
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative w-full -mt-3 md:-mt-5'
      >
        <div className='absolute w-full h-80 hero-gradient rounded-tl-[140px] z-0 -top-7' />
        <img
          src='/cover.png'
          alt='cover'
          className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
        />

        <a href='#explore'>
          <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-10 relative z-10'>
            <img
              src='/stamp.png'
              alt='stamp'
              className='sm:w-40 w-28 sm:h-40 h-28 object-contain'
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
