import React from 'react'
import { Link } from 'react-router-dom' 
import Arrow from '../../img/read-more-arrow.png'
import './MostSearched.css'

export default function MostSearched(props) {
  return (
    <div className="most-searched">
        <h5>Most Searched Breeds</h5>
        <div className="line-break"></div>
            <div className="titles">
            <h3>66+ Breeds For you to discover</h3>
            <Link to="/most-searched-page">
                <p>SEE MORE <img src={Arrow} alt="See more"/></p>
            </Link>
        </div>
        <div className="article-images">
            {props.top4.map((cat, i) => (
                <div key={i} className={`image-${i+1}`}>
                    <Link to={`/detail-page/${cat.name}`}>
                        <img data-testid="home-images" src={cat.url} alt={cat.name}/>
                        <p>{cat.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}
