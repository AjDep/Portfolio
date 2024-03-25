import React from 'react';
import '../HomePage/home.css';
import Texttype from '../../components/Typewriter.jsx'
import Nav from '../../components/Insta.jsx';
import MyImage from '../../components/MyImage.jsx';
import insta from '../../Images/Instagram_logo_2016.svg';
import face from "../../Images/facebook.svg"
import linkdin from '../../Images/LinkedIn_icon.svg'
import whatsapp from '../../Images/pngegg (2).png'
import Cards from '../../components/Card1.jsx'
import ast from "../../Images/astaqua.svg"
import Lung from "../../Images/Lungs.jpg"
import bagv from "../../Images/bagvideo.gif"
import tog from "../../Images/toggle.gif"
import Navbar from '../../components/navbar.jsx';

const myDes =" A second-year Software Engineering student at the Informatics Institute of Technology, affiliated with the University of Westminster, UK. Originally from Sri Lanka, I hold a distinction in Software Engineering from the University of Wayamba.Alongside my studies, I actively contribute as Assistant Secretary of the Student Union and am deeply engaged in technology through roles in the Mozilla Club and IEEE. I'm also a skilled photographer, having won the Uptown Colombo Rotaract Wildlife Photography Contest and contributing to Quadrangle magazine.My leadership experience extends from being Senior President at St. Peter's College to President of the Aviation Club. I'm passionate about becoming a full-stack developer and am excited about the journey ahead.Join me as I explore the realms of technology, creativity, and leadership!"
const Topic1 = "This is topic 1";
const Topic2 = "This is topic 2";
const Topic3 = "This is topic 3";
const Para1 = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.";

export default function home() {
  return (
    <div>
      <Navbar/>
      <div className='LandingPage'>
        <div className='LadingPageLeft'>
          <div className='Info'>
          <h1 className='infotopic'>Hi,<br></br> <span style={{color: "#add7fe"}}>I'm Anjana Dep</span></h1>
          <Texttype/>
          <p className='myinfo'>{myDes}</p>
          </div>
          <div className='Socials'>
        <Nav link="https://www.instagram.com/" imageSrc={insta} backgroundColor="#21212150" width="50px" />
        <Nav link="https://www.facebook.com/Anjana.Dep?mibextid=ZbWKwL" imageSrc={face} backgroundColor="#21212150" width="60px" />
        <Nav link="www.linkedin.com/in/anjanadep" imageSrc={linkdin} backgroundColor="#21212150" width="40px"/>
        <Nav link="https://wa.me/qr/LLHZJB52OS2FL1" imageSrc={whatsapp} backgroundColor="#21212150" width="45px"/>
          </div>
        </div>
        <div className='LadingPageRight'>
          <MyImage />
        </div>
      </div>
      <div id='myProjects' className='myProjects'>
        <h1 id='TitleProject'>My Projects</h1>
        <div className='cards'>
          <Cards link="https://astaqua.com" imagesrc={ast} Topic="Company Website" para="Designed and developed a website for Astaqua as a part of my diploma project."/>
          <Cards link="https://github.com/AjDep/Early_Lung_Cancer_Detection_System"imagesrc={Lung} width="300.9px" backgroundColor="#2b323a" Topic="Early Lung Cancer Detection System" para="Using machine learning, we can predict whether a user will develop lung cancer before the symptoms appear by analyzing the Alkane particles in their breath with the MQ2 sensor"/>
          <Cards link="https://ajdep.github.io/AnimateProductBox_Component/" imagesrc={bagv} width="220px"  backgroundColor="#2b302f"Topic='Rotating Box for Dynamic Cart Display' para="Enabled individual display of items in the shopping cart with engaging animations, enhancing user interaction."/>
          <Cards link="https://ajdep.github.io/ToggleBar/" imagesrc={tog} width="220px"Topic='Toggle bar with Animation' para="An animated toggle bar to switch between Light mode and Dark mode"/>
        </div>
          
      </div>
      
      <h1 id='TitleProject'>Contact Me</h1>
      <div id='contactME' className='contactME'>
      <Nav link="https://www.instagram.com/" imageSrc={insta} backgroundColor="#21212150" width="50px" />
        <Nav link="https://www.facebook.com/Anjana.Dep?mibextid=ZbWKwL" imageSrc={face} backgroundColor="#21212150" width="60px" />
        <Nav link="www.linkedin.com/in/anjanadep" imageSrc={linkdin} backgroundColor="#21212150" width="40px"/>
        <Nav link="https://wa.me/qr/LLHZJB52OS2FL1" imageSrc={whatsapp} backgroundColor="#21212150" width="45px"/>
      </div>
    </div>
  );
}
