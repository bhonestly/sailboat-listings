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

      <img className="boat-picture" src={boat.boatPicture ? boat.boatPicture : 'https://i.imgur.com/z5s9hjl.jpg'} alt={boat.title} />

      <img className="boat-picture" src={boat.imgURL} alt={boat.make} />


      <div className="info-card">
        <div className="boat-details">
        Make: {boat.make.name} <br /> Model: {boat.model} <br /> Designer: {boat.designer} <br /> Length Overall: {boat.loa} <br /> Built: {boat.build_year} <br /> Price:{" "} <span className="price">${boat.price}</span>
        </div>
        <div className="description-card">
          <div className="detail-description">{boat.description}</div>
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