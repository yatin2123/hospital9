import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './container/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Userroutes from './container/routes/Userroutes';
import Adminroutes from './container/routes/Adminroutes';
import { Provider } from 'react-redux';
import { Store } from '@mui/icons-material';
import { store } from './redux/store';



function App() {
  
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route exact path="/*" element={<Userroutes />} />
          <Route exact path="/admin/*" element={<Adminroutes />} />
        </Routes>
      </Provider>

    </>
  );
}

export default App;
