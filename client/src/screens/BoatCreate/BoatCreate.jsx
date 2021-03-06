import React from 'react'
import { useState, useEffect } from 'react'
import { getAllMakes } from '../../services/makes'

export default function BoatCreate({ handleSubmit }) {
  const [isCreated, setCreated] = useState(false)// eslint-disable-line
  const [makes, setMakes] = useState([])

  const [boat, setBoat] = useState({
    img_url: '',
    build_year: '',
    make_id: '',
    model: '',
    loa: '',
    designer: '',
    price: '',
    description: '',
    user_id: 1
  })

  useEffect(() => {
    const fetchMakes = async () => {
      const res = await getAllMakes();
      setMakes(res)
    }
    fetchMakes();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target
    setBoat({
      ...boat,
      [name]: value,
    })
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const created = await createBoat(boat)
  //   setCreated({ created })
  // }

  // if (isCreated) {
  //   return <Redirect to={`/`} />
  // }

  // if (!user) {
  //   return <BoatBrowse />
  // } else 
  // wrap second return in layout tag
  return (
    <div className='boat-create'>
      <form className='create-form'
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(boat)
        }}>
        <div className='create-form-title'>Create a New Boat</div>
        <select
          className='create-input-make'
          value={boat.make_id}
          name='make_id'
          required
          onChange={handleChange}
          defaultValue='default'
        >
          {/* need to fix default value */}
          <option disabled value='default'>Select</option>
          {makes.map(make => {
            return <option key={make.id} value={make.id}>{make.name}</option>
          })}
        </select>
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
          name='img_url'
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