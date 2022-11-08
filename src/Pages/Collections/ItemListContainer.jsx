import React, { useEffect, useState } from 'react'
import { getCollections } from '../../services/service'
import Collections from './ItemList'

const GetCollectionData = () => {
    const [images, setImages] = useState([])
const getImages = async() => {
  const data = await getCollections()
  setImages(data)
}

useEffect(() => {
    getImages()
})


  return (
    <Collections
    data={images}
    />
  )
}

export default GetCollectionData