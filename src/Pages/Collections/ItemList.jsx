
import React, {useState, useEffect} from 'react'
import Target from './Item'
import Banner from '../../components/Banner'
import './body.css'
import { imgGalleryFunction } from '../../utils/util';

const Collections
 = ({ data }) => {
 const [arrImages, setArrImages] = useState([])

 useEffect(() =>{
  if (data.length >0) {
    const dataGroups = imgGalleryFunction(data)
    setArrImages(dataGroups)      
  }
}, [data])

  return (
    <>
    <Banner
    sectionName='Collections'
    />

<div className="row"> 
{
  arrImages.length > 0 &&
  arrImages.map((arrImg, index) => (
    <div className="column" key={index}>
      {
      arrImg.map((singleImg) => (

        <Target
        title={singleImg.title}
        id={singleImg.id}
        coverPhoto={singleImg.cover_photo}
        key={singleImg.id}
        user={singleImg.user}
        />     
        )
      
      )  

      
      }

    </div>
  ))
}
    
</div>
        

    </>
  )
}

export default Collections
