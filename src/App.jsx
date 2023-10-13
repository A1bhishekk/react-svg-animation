
import './App.css'
import React from 'react'
import Lottie from 'lottie-react'
import dbanimation from './assets/dbanimation.json'
import hackinganimation from './assets/hacking.json'
import securityanimation from './assets/security.json'
import csanimation from './assets/cbsanim.json'


const App = () => {
  return (
    <>
    <h2>React SVG Animation</h2>

    <div className='main'>
      <div className="anim">
      <Lottie animationData={dbanimation}  height={29}/>
      </div>
      <div className="anim">
      <Lottie animationData={csanimation} />
      </div>
      <div className="anim">
      <Lottie animationData={hackinganimation} />
      </div>
      <div className="anim">
      <Lottie animationData={securityanimation}  />
      </div>
        
    </div>
    </>
  )
}

export default App