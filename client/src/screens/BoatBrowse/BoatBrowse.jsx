import React from 'react'
import { Link } from 'react-router-dom'

export default function BoatBrowse({boatList}) {
  console.log(boatList)
  console.log('hello')
  return (
    <div>
      {boatList && boatList.map(boat => {
        const {model, build_year, loa, designer, id, make_id} = boat || {}
        return(
          <Link to={`/boats/${id}`}>
            <h1>{model}</h1>
            <h1>{build_year}</h1>
            <h1>{loa}</h1>
            <h1>{designer}</h1>
            <h1>{make_id}</h1>
          </Link>
        )
      })}
    </div>
  )
}
