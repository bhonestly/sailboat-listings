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
          <p className="detail-make"> Make: {boat.make.name} </p>
          <p className="detail-model"> Model: {boat.model} </p>
          <p className="detail-designer"> Designer: {boat.designer} </p>
          <p className="detail-loa"> Length Overall: {boat.loa} </p>
          <p className="detail-build"> Built: {boat.build_year} </p>
          <p className="detail-price"> Price:{boat.price}</p>
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
