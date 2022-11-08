import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/Collections/body.css'

const Card = ({ id, liked, likes, urls, alt }) => {
    const { regular } = urls

  

  return (
    <>   
    <Link to={id} className="backgroundHover" >
    <img  src={regular}  alt={alt} id={id} className='card-img'/> 
    </Link>
    </>
  )
}

export default Card

