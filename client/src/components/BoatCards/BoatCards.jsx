import React from "react";
import "../../assets/css/components/BoatCards/BoatCards.css";
import { Link } from "react-router-dom";

export default function BoatCards(props) {
  return (
    <>
      <div className="boat-container" >
        <Link className="boat" to={`/boats/${props._id}`}>
          <div className='boat-cards-individuals'>
            <img className="boat-image" src={props.img_url} alt={props.make_id} />
            <div className='boat-info-container'>
              <div className="boat-make">{props.make_id}</div>
              <div className="boat-model">{props.model}</div>
              <div className="boat-designer">{props.designer}</div>
              <div className="boat-loa">{props.loa}</div>
              <div className="boat-build-year">{props.build_year}</div>
              <div className="boat-price">{props.price}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
