import React from 'react'
import Arrow from '../img/read-more-arrow.png'
import GridImage1 from '../img/grid-image-1.png'
import GridImage2 from '../img/grid-image-2.png'
import GridImage3 from '../img/grid-image-3.png'

export default function Article() {
  return (
    <div className="article-wrapper">
        <div className="article">
            <div className="line-break"></div>
            <h2 className="article-title">Why should you have a cat?</h2>
            <p className="article-subtitle">
                Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels
            </p>
            <div className="read-more">
                <a href="https://www.lifehack.org/285000/14-reasons-why-you-should-have-cat-home" target="_blank" rel="noopener noreferrer">
                    <p className="read-more-btn"><b>READ MORE</b></p>
                    <img src={Arrow} alt='Click link to read more'/>
                </a>
            </div>
        </div>
        <div className="photo-grid" >
            <div className="column-1">
                <img className = "grid-image-1" src={GridImage1} alt=""/>
                <img className = "grid-image-2" src={GridImage2}  alt=""/>
            </div>
            <div className="column-2">
                <img className = "grid-image-3" src={GridImage3} alt=""/>
            </div>
        </div>
    </div>
  )
}
