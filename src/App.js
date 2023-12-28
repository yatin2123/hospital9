import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './container/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Userroutes from './container/routes/Userroutes';
import Adminroutes from './container/routes/Adminroutes';

function App() {
  return (
    <>
    <Routes>
      <Route  exact path="/*" element={<Userroutes/>} />
      <Route exact path="/admin/*" element={<Adminroutes/>} />
    </Routes>
    
    </>
  );
}

export default App;
