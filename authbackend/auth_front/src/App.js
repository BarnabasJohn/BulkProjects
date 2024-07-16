import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './hocs/Layout'
import PrivateRoutes from './hocs/PrivateRoute'
import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Activate from './containers/Activate'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="/" element={<Home />}/>
            </Route>
            <Route path='/login'  element={<Login />} />
            <Route path='/signup'  element={<Signup />} />
            <Route path='/reset_password'  element={<ResetPassword />} />
            <Route path='/password/reset/confirm/:uid/:token' exact element={<ResetPasswordConfirm />} />
            <Route path='/activate/:uid/:token'  element={<Activate />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
