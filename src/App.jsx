
import './App.css'
import React from 'react'
import Lottie from 'lottie-react'
import dbanimation from './assets/dbanimation.json'
import hackinganimation from './assets/hacking.json'
import securityanimation from './assets/security.json'
import csanimation from './assets/cbsanim.json'
import ParticleBackground from './components/ParticleBackground'


const App = () => {
  return (
    <>
    <ParticleBackground/>
    <h2>React SVG Animation</h2>
    <div className='main'>
      <div className="anim">
      <Lottie animationData={dbanimation}  height={29}/>
      </div>
      <div className="anim">
      <Lottie animationData={securityanimation}  />
      </div>
      <div className="anim">
      <Lottie animationData={hackinganimation} />
      </div>
      <div className="anim">
      <Lottie animationData={csanimation} />
      </div>
        
    </div>
    </>
  )
}

export default App