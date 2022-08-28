import React, { useState, useEffect } from 'react'
import Article from '../components/Article'
import Search from '../components/Search'
import MostSearched from '../components/MostSearched'
import Loading from '../components/Loading'

export const Home = () => {
  const [isFetching, setIsFetching] = useState([true, true])
  const [top4, setTop4] = useState([{}])
  const [names, setNames] = useState(['', ''])

  useEffect(() => {
    fetch("/api/top4")
      .then((res) => res.json())
      .then((data) => setTop4(data))
      .then(setTimeout(() => setIsFetching(false), 2000));
  }, []);

  useEffect(() => {
    fetch("/api/get-all")
      .then((res) => res.json())
      .then((data) =>setNames(data));
  }, []);

  return isFetching? <Loading/>: (
    <div className="App-homepage">
      <Search names={names}/>
      <MostSearched top4={top4}/>
      <Article/>
    </div>
  )
}