import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingScreen />}>
              <Route path='' element={<Home />} />
              <Route path='signin' element={<SignIn />}/>
              <Route path='signup' element={<SignUp />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
