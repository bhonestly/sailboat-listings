import './App.css';
import BoatContainer from './containers/BoatContainer'
import { useState, useEffect } from 'react'
import { useHistory, Switch, Route } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Login from './screens/Login/Login'
import SignUp from './screens/SignUp/SignUp'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push('/')
  }

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push('/')
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
  }
  return (
    <div className="App">
      <Nav user={currentUser} handleLogout={handleLogout} />
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/signup'>
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Route path='/'>
          <BoatContainer currentUser={currentUser} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
