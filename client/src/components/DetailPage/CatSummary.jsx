import React from 'react'
import './CatSummary.css'

export default function CatSummary (props){
  const generateRatingBar = number => {
    const ratingArr = []
    for (let i = 0; i < 5; i++) {
      if (number > 0) {
        ratingArr.push(<div key={i} className="bk-bg"></div>)
      }else {
        ratingArr.push(<div key={i} className="no-bg"></div>)
      }
      --number
    }
    return ratingArr
  }

  return (
    <div className="cat-summary">
      <div className="photo-container">
        <img src={props.breedInfo.photos[0]} alt="Placeholder" className="photo"/>
      </div>
      <div className="right">
        <div className="text">
          <h4>{props.breedName}</h4>
          <p>{props.breedInfo.description}</p>
        </div>
        <div className="stats">
          <p>
            <span>Temperament: </span>
            {props.breedInfo.temperament}
          </p>
          <p>
            <span>Origin: </span>
            {props.breedInfo.origin}
          </p>
          <p>
            <span>Life Span: </span>
            {props.breedInfo.life_span + ' years'} 
          </p>
          <br/>
          <div className="rating">
            <span className="stat">Adaptability: </span>
            <div className="rating-container">
              {generateRatingBar(props.breedInfo.adaptability).map((x, index)=> x)}
            </div>
          </div>
          <div className="rating">
            <span className="stat">Affection level: </span>
            <div className="rating-container">
              {generateRatingBar(props.breedInfo.affection_level).map((x, index)=> x)}
            </div>
          </div>
          <div className="rating">
            <span className="stat">Child friendly: </span>
            <div className="rating-container">
            {generateRatingBar(props.breedInfo.child_friendly).map((x, index)=> x)}
            </div>
          </div>
          <div className="rating">
            <span className="stat">Grooming: </span>
            <div className="rating-container">
            {generateRatingBar(props.breedInfo.grooming).map((x, index)=> x)}  
            </div>
          </div>
          <div className="rating">
            <span className="stat">Intelligence: </span>
            <div className="rating-container">
              {generateRatingBar(props.breedInfo.intelligence).map((x, index)=> x)} 
            </div>
          </div>
          <div className="rating">
            <span className="stat">Health issues: </span>
            <div className="rating-container">
            {generateRatingBar(props.breedInfo.health_issues).map((x, index)=> x)} 
            </div>
          </div>
          <div className="rating">
            <span className="stat">Social needs: </span>
            <div className="rating-container">
            {generateRatingBar(props.breedInfo.social_needs).map((x, index)=> x)} 
            </div>
          </div>
          <div className="rating">
            <span className="stat">Stranger friendly: </span>
            <div className="rating-container">
            {generateRatingBar(props.breedInfo.stranger_friendly).map((x, index)=> x)} 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
