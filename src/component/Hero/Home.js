import React from "react"
import "./Home.css"
// import hero from "../pic/hero.png"
import hero from "../pic/img1.png"

import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import {  } from "react-fontawesome"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>“A kind gesture can reach a wound that only compassion can heal.” — Steve Maraboli</h3>
            <h1>
              Welcome to <span>BHET</span>
            </h1>
            <h2>
            Bringing Health
              <span>
                <Typewriter words={[" ", " and Employability Together."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
              
            </h2>

            <p>A social enterprise initiative working in the slums of Mumbai. We
              support vulnerable women with skills training (stitching, tailoring, embroidery) and support to earn livelihoods.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND US ON</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
