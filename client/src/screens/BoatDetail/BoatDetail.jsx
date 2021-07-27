import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBoat } from '../../services/boats';

export default function BoatDetail() {
  const [boat, setBoat] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBoat = async () => {
      const boat = await getBoat(id);
      setBoat(boat);
      setLoaded(true);
    };
    fetchBoat();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="detail-container">

      {/* <img className="boat-picture" src={boat.boatPicture ? boat.boatPicture : 'https://i.imgur.com/z5s9hjl.jpg'} alt={boat.title} /> */}

      <img className="boat-picture" src={boat.img_url} alt={boat.model} />


      <div className="info-card">
        <div className="boat-details">
          <p> Make: {boat.make.name} </p>
          <p> Model: {boat.model} </p>
          <p> Designer: {boat.designer} </p>
          <p> Length Overall: {boat.loa} </p>
          <p> Built: {boat.build_year} </p>
          <p> Price:{boat.price}</p>
        </div>
        <div className="description-card">
          <div className="detail-description">Description: {boat.description}</div>
        </div>
      </div>
    </div>
  )
}

// @boat=Boat.create(
//   make_id: @make.id,
//   user_id: @user.id,
//   model: '30-5',
//   designer: 'C&C',
//   loa: '29.5',
//   build_year: '1985',
//   price: '9500'
//   imageURL: '',
//   description: ''