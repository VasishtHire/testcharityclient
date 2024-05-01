import React from "react"
import "../Work/Work.css"
import "../Fundraisers/Fundraisers.css"
import Card from "./Card"
import FundraisersApi from "./FundraisersApi"

const Fundraisers = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CHECK OUT THE CURRENTLY RUNNING FUNDRAISER CAMPAIGNS</h4>
            <h1>Our Fundraisers</h1>
          </div>

          <div className='content grid'>
            {FundraisersApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Fundraisers
