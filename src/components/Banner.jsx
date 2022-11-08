import React from 'react'
import '../Pages/Home/home.css'

const Banner = ({sectionName}) => {
  return (
    <div className='banner'>
        <h1 className='sectionTitle'>
        {sectionName}
        </h1>
        </div>
  )
}

export default Banner