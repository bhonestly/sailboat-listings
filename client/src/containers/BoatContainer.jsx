import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllBoats, postBoat, putBoat, deleteBoat } from '../services/boats';
import Boats from '../screens/Boats';
import BoatCreate from '../screens/BoatCreate';
import BoatEdit from '../screens/BoatEdit';
import BoatDetail from '../screens/BoatDetail';

export default function BoatContainer() {
	const [boatList, setBoatList] = useState([]);
	const history = useHistory();

  useEffect(() => {
		const fetchBoats = async () => {
			const boatData = await getAllBoats();
			setBoatList(boatData);
		};
		fetchBoats();
	}, []);
}

