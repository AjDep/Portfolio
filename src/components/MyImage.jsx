import React from 'react'
import './Components_css/MyImage.css'
import Anjana from  '../Images/Anjana.png'
export default function MyImage() {
  return (
    <div className='MyImage'>
   
   <img className="Portrait" src={Anjana}></img>
    </div>
  )
}
