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

  // if (!user) {
  //   return <BoatBrowse />
  // } else 
  // wrap second return in layout tag
  return (
    <div className='boat-create'>
      <form className='create-form' onSubmit={handleSubmit}>
      <div className='create-form-title'>Create a New Boat</div>
      <input
            className='create-input-make'
            placeholder='Make'
            value={boat.make}
            name='make'
            required
            autoFocus
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-model'
            placeholder='Model'
            value={boat.model}
            name='model'
            required
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-designer'
            placeholder='Designer'
            value={boat.designer}
            name='designer'
            required
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-loa'
            placeholder='LOA'
            value={boat.loa}
            name='loa'
            required
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-build-year'
            placeholder='Build Year'
            value={boat.build_year}
            name='build_year'
            required
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-price'
            placeholder='Price'
            value={boat.price}
            name='price'
            required
            onChange={handleChange}
          />
          <br />
          <input
            className='create-input-image-link'
            placeholder='Image URL'
            value={boat.img_url}
            name='imgURL'
            required
            onChange={handleChange}
          />
          <br />
          <textarea
            className='create-textarea-description'
            rows={10}
            placeholder='Description'
            value={boat.description}
            name='description'
            required
            onChange={handleChange}
          />
          <button type='submit' className='create-submit-button'>
            CREATE
          </button>
      </form>
    </div>
  )
}