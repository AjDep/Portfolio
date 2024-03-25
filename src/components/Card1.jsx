import React from 'react'
import './Components_css/card.css'


const Para1="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before the final copy is available"
export default function Card1(props) {
  const{link,imagesrc,para,Topic,width,backgroundColor}=props;
  return (
    <div>
        <div className='card'>
            <a href={link} className="Link">
          <div className='imgContent'style={{ backgroundColor: backgroundColor}}>
            <img className='cardimg' src={imagesrc} style={{width:width}} ></img>
          </div>       
        </a>
        <div className='textContent'>
        <h4>{Topic}</h4>
        <p className='ContentPara'>{para}</p>
        </div>
      </div>
    </div>
  )
}
