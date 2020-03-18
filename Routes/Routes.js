import React from 'react';
import { Route } from 'react-router-native';
import Home from '../Views/PatientHome';
import TherapistLogin from '../Views/TherapistLogin';
import PatientLoggin from '../Views/PatientLoggin';
import Form from '../Views/Form';
import Test from '../Views/Test';
import AdminHome from '../Views/AdminHome';
import PatientHome from '../Views/PatientHome';
import Header from '../Components/Header';
import Gravling from '../Views/Gravling';
import FetchForm from '../Views/FetchForm'

export default () => {
  return (
    <>
      <Route exact path="/" component={PatientLoggin} />
      <Route exact path="/therapistLogin" component={TherapistLogin} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/postform" component={Form} />
      <Route exact path="/gravling" component={Gravling} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/adminhome" component={AdminHome} />
      <Route exact path="/patienthome" component={PatientHome} />
      <Route exact path="/header" component={Header} />
      <Route exact path="/fetchform" component={FetchForm} />
    </>
  );
};
