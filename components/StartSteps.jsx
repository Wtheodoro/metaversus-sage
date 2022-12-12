import styles from '../styles'

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-20 h-20 rounded-3xl bg-[#323f5d]`}>
      <p className='font-bold text-xl text-white'>0{number}</p>
    </div>
    <p className='flex-1 ml-8 font-normal text-lg text-[#b0b0b0] leading-8'>
      {text}
    </p>
  </div>
)

export default StartSteps
