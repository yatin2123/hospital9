import React from 'react';
// import Layout from '../admin/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import MedisinForm from '../../admin/container/Medisin/MedisinForm';
import Medisin from '../../admin/container/Medisin/Medisin';
// import Layout from './'

function Adminroutes(props) {
    return (
        <div>
            {/* <Layout> */}
                <Routes>
                    <Route exact path="/medisin" element={<Medisin/>} />
                </Routes>
            {/* </Layout> */}

        </div>
    );
}

export default Adminroutes;