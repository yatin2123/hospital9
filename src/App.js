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
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import Alert from './component/Alert/Alert';
import { SnackbarProvider } from 'notistack';



function App() {

  return (
    <>
      <SnackbarProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Alert />
            <Routes>
              <Route exact path="/*" element={<Userroutes />} />
              <Route exact path="/admin/*" element={<Adminroutes />} />
            </Routes>
          </PersistGate>
        </Provider>
      </SnackbarProvider>

    </>
  );
}

export default App;
