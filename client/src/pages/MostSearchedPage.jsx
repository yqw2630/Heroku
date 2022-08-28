import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loading from '../components/Loading'

export const MostSearchedPage = () => {
  const [isFetching, setIsFetching] = useState([true, true])
  const [top10, setTop10] = useState([{
    name: '',
    url: '',
    desc: ''
  }])

  const result = (obj, i) => {
    return (
      <div key={i} className="search-result">
        <Link to={`/detail-page/${obj.name}`}>
          <img className="cat-img" src={obj.url} alt={obj.name}/>
        </Link>
        <div className="cat-text-wrapper">
          <h3 className="cat-title">
            {`${i + 1}. ${obj.name}`}
          </h3>
          <p className="cat-desc">
            {obj.desc}
          </p>
          <Link to={`/detail-page/${obj.name}`}>
            <p className="cat-detail-link"><b>Details</b></p>
          </Link>
        </div>
      </div>
    )
  }

  useEffect(() => {
    fetch("/api/top10")
      .then((res) => res.json())
      .then((data) => setTop10(data))
      .then(setTimeout(() => setIsFetching(false), 5000));
  }, []);

  return isFetching? <Loading/>: (
    <div className="App-homepage">
      <div className="top-10-header">
        <h1>Top 10 most searched breeds</h1>
      </div>
      <div className="top-10-description">
        {top10.map((obj, index) => {
          return result(obj,index)
        })}
      </div>
    </div>
  )
}
