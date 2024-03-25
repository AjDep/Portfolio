import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import "../components/Components_css/navbarbtn.css"
export default function navbar() {
  return (
    <div>
      <nav className='navbarbtns'>
        <Link className='navbarbtn' to="">Home</Link>
        <Link className='navbarbtn' to="#myProjects">Projects</Link>
        <Link className='navbarbtn'to="#contactME">Contact Me</Link>
      </nav>
    </div>
  )
}
