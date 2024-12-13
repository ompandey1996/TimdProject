// import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
   import "./Footer.css"
function Footer() {
  return (
    <footer className="footer_container">
      <div className="aboutsection">
        <h1>AboutUs</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum, esse necessitatibus delectus neque nulla reiciendis impedit eligendi repellat cumque.</p>
      </div>
      <div className="more_link_section">
           <h1>More Links</h1>
           <ol className="more_links_ol">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Refund </li>
           </ol>
      </div>
      <div className="contact_section">
      <h1>Contact</h1>
           <ol className="contact_ol">
            <li><FaLocationDot /><span className="footer_margin">Asansol,Murgasul road</span>
            </li>
            <li><MdEmail />
              <span className="footer_margin" >ompandey092@gmail.com</span>
            </li>
            <li><IoMdContact /><span className="footer_margin">8210197015</span>
            </li>
            
           </ol>
      </div>
    </footer>
  )
}

export default Footer