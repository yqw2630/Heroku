import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Search(props) {
  const [tempNames, setTempNames] = useState(['', ''])
  const [constNames, setConstNames] = useState(['', ''])

  useEffect(() => {
    setTempNames(props.names)
    setConstNames(props.names)
  }, [props])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    e.preventDefault()
    const userInput = document.querySelector('input.search').value.toLowerCase()
    const namesDiv  = document.querySelector('div.names-list')
    const namesList = document.querySelector('ul.names-list')

    if(userInput === '' || !userInput) {
      namesDiv.classList.add('hidden')
      namesList.classList.add('hidden')
    }else {
      namesDiv.classList.remove('hidden')
      namesList.classList.remove('hidden')
    }
    generateList(userInput)
  }

  const generateList = (userInput) => {
    if(userInput === '' || !userInput) {
      setTempNames(constNames)
    }else {
      setTempNames(constNames.filter(name => name.toLowerCase().startsWith(userInput)))
    }
  }

  return (
    <div className="search-header">
        <p className="subtitle"><b>Get to know more about your cat breed</b></p>
        <form action="" className="search" onSubmit={handleSubmit}>
            <input type="text" className="search" placeholder="Search" onSubmit={handleSubmit} onChange={handleChange}/>
            <div className="names-list hidden">
              <ul className="names-list hidden">
                {tempNames.map((name, i) => 
                  <Link to={`/detail-page/${name}`} key={i}>
                    <li key={i}>{name}</li>
                  </Link>
                )}
              </ul>
            </div>
        </form>
    </div>
  )
}
