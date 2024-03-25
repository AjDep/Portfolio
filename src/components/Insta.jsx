import React from 'react';
import './Components_css/insta.css';

export default function Insta(props) {
  const { link, imageSrc, backgroundColor,width } = props;

  return (
    <div>
      <button className="button" style={{ backgroundColor: backgroundColor}}>
        <a href={link} className="no-link-style">
          <img className='ins' src={imageSrc} style={{width:width}} ></img>
        </a>
      </button><br></br>
    </div>
  );
}
