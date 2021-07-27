import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBoat } from '../../services/boats';

export default function BoatDetail({ handleDelete }) {
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
      <div className="details-buttons">
        <Link to={`/boats/${boat.id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={() => handleDelete(boat.id)}>DELETE</button>
      </div>
    </div>
  )
}
