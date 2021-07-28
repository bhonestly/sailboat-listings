import React from 'react'
import { Link } from 'react-router-dom'

export default function BoatBrowse({boatList}) {
  console.log(boatList)
  console.log('hello')
  return (
    <div>
      {boatList.map(boat => {
        const {model, build_year, loa, designer, id, make, img_url} = boat
        return(
          <Link to={`/boats/${id}`} key={id}>
            <img src={img_url} alt={model}/>
            <h1>{model}</h1>
            <h1>{build_year}</h1>
            <h1>{loa}</h1>
            <h1>{designer}</h1>
            <h1>{make?.name}</h1>
          </Link>
        )
      })}
    </div>
  )
}
