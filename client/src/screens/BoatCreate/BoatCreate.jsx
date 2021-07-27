import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createBoat } from '../../services/boats'
import BoatBrowse from '../BoatBrowse/BoatBrowse'

export default function BoatCreate() {
  const [isCreated, setCreated] = useState(false)

  const [boat, setBoat] = useState({
    imgURL: '',
    build_year: '',
    make: '',
    model: '',
    loa: '',
    designer: '',
    price: '',
    description: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setBoat({
      ...boat,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createBoat(boat)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/boats`} />
  }

  if (!user) {
    return <BoatBrowse />

  return (
    <div>
      
    </div>
  )
}
