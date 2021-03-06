import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllBoats, createBoat, updateBoat, deleteBoat } from '../services/boats';
import BoatBrowse from '../screens/BoatBrowse/BoatBrowse'
import BoatCreate from '../screens/BoatCreate/BoatCreate';
import BoatEdit from '../screens/BoatEdit/BoatEdit';
import BoatDetail from '../screens/BoatDetail/BoatDetail';

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

  const handleCreate = async (formData) => {
    const boatData = await createBoat(formData);
    setBoatList((prevState) => [...prevState, boatData]);
    history.push('/');
  };

  const handleUpdate = async (id, formData) => {
    const boatData = await updateBoat(id, formData);
    setBoatList((prevState) =>
      prevState.map((boat) => {
        return boat.id === Number(id) ? boatData : boat;
      })
    );
    history.push(`/boats/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteBoat(id);
    setBoatList((prevState) => prevState.filter((boat) => boat.id !== id));
    history.push('/');
  };

  return (
    <Switch>
      <Route exact path='/'>
        <BoatBrowse boatList={boatList} />
      </Route>
      <Route path='/boats/:id/edit'>
        <BoatEdit boatList={boatList} handleSubmit={handleUpdate} />
      </Route>
      <Route path='/boats/new'>
        <BoatCreate handleSubmit={handleCreate} />
      </Route>
      <Route path='/boats/:id'>
        <BoatDetail handleDelete={handleDelete} />
      </Route>
    </Switch>
  );
}
