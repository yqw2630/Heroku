import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Error from '../components/DetailPage/404'
import CatSummary from '../components/DetailPage/CatSummary'
import CatPhoto from '../components/DetailPage/CatPhoto'
import Loading from '../components/Common/Loading'

export const DetailPage = () => {
  const [isFetching, setIsFetching] = useState([true, true])
  const [isError, setIsError] = useState(false)
  const {breedName} = useParams()
  const [photos, setPhotos] = useState(['',''])
  const [breedInfo, setBreedInfo] = useState({
    photos: ['', ''], 
    name: '', 
    description: '', 
    temperament: '', 
    origin: '', 
    life_span: '', 
    adaptability: '', 
    affection_level: '', 
    child_friendly: '', 
    grooming: '', 
    intelligence: '', 
    health_issues: '', 
    social_needs: '', 
    stranger_friendly: ''
  })

  useEffect(() => {
    fetch(`/api/details/${breedName}`)
      .then((res) => res.json())
      .then((data) => {
        setBreedInfo(data)
        data.photos.shift()
        const currentPhotos = data.photos
        setPhotos(currentPhotos)
      })
      .then(setTimeout(() => setIsFetching(false), 1000))
      .catch((e) =>{
        setIsError(true)
        console.log(e)
      });
  }, [breedName]);

  return isFetching? <Loading/>: isError? <Error/>: (
    <div className="App-homepage">
      <CatSummary breedInfo={breedInfo} breedName={breedName}/>
      <CatPhoto photos={photos} breedName={breedName}/>
    </div>
  )
}
