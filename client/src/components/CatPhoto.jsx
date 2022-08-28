import React from 'react'

export default function CatPhoto (props) {
  return (
    <div className="cat-photos">
        <h3>More photos</h3>
        <div className="photo-carousel">
        {props.photos.map((photo, index) => <img key={index} src={photo} alt={props.breedName}/>)}
        </div>
    </div>
  )
}
