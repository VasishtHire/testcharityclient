import React from "react"
import logo1 from "../assets/images/logo1.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          <p>© 2024. All rights reserved by BHET Foundation.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
