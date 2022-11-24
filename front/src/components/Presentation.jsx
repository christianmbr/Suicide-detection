import Fade from 'react-reveal/Fade';
import motivation from '../variables/phrases'
import React from 'react'

export default function Presentation() {
  const randomNumber = Math.floor(Math.random() * motivation.length)
  const randomNumber2 = Math.floor(Math.random() * 5)
  const phrase = motivation[randomNumber];
  console.log(randomNumber2)
  return (
    <div className='principal container'>
      <div className='principalChild'>
        <p><Fade cascade duration={1500} delay={500}>Suicide and</Fade></p>
        <p><Fade cascade duration={1500} delay={500}>depression</Fade></p>
        <p><Fade cascade duration={1500} delay={500}>detection</Fade></p>
        <p className='principalChild-light'><Fade cascade duration={3000} delay={500}>{phrase}</Fade></p>
        <Fade up delay={1700} distance={'10px'}><a className='boton' href="#prediction">Start</a></Fade>
      </div>
      <div>
        <Fade duration={1500} delay={500}>
          <img className='image' src={`./images/image${randomNumber2}.svg`} alt="Heart" />
        </Fade>
      </div>
    </div>
  )
}
