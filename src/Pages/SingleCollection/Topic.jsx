import React, {useEffect, useState} from 'react'
import { getTopicById } from '../../services/service'
import { imgGalleryFunction } from '../../utils/util';
import Card from '../../components/Card';
import BreadCrumbCustom from '../../components/Breadcrum';
import { useLocation } from 'react-router-dom';
const Topic = ({topicId}) => {
    const [imgCollection, setImgCollection] = useState([]) // TODO: crear estos states en un utils
    const [arrImages, setArrImages] = useState([])
    const location  = useLocation()
 
 const getCollection = async() => {
     const data = await getTopicById(topicId)
     setImgCollection(data)   
    }
    
    useEffect(() =>{
        getCollection()   
        
    }, [location.pathname])
    
  useEffect(() =>{
    if (imgCollection.length >0) {
      const dataGroups = imgGalleryFunction(imgCollection)
      setArrImages(dataGroups)      
    }
  }, [imgCollection])
    

  return (
    <>
   <BreadCrumbCustom/>
   <div className="row"> 
  {
  arrImages.length > 0 &&
  arrImages.map((arrImg, index) => (
    <div className="column" key={index}>
      {
      arrImg.map((singleImg) => (

        <Card
        liked={singleImg.liked_by_user}
        id={singleImg.id}
        likes={singleImg.likes}
        key={singleImg.id}
        urls={singleImg.urls}
        alt={singleImg.alt_description}
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

export default Topic