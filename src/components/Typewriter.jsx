import React from 'react'
import TypeWriter from 'typewriter-effect'
import  "./Components_css/Typewriter.css"
const Text="Hello Senuvi Jaysinghe is here gf of Anjana Dep"


export default function Typewriter() {
  return (
    <div >
      <div className='Type'>
        <h3>
            <TypeWriter className="text"
                options={{
                    autoStart:true,
                    loop:true,
                    delay:50,
                    strings:["An undergraduate of University of Westminster","Assistant Sectary of Students Union at IIT","Past Senior Prefect of St.Peter's College Colombo 4","Freelance Photographer"],
                    
                }}

           />
        </h3>
        </div>

    </div>
  )
}
