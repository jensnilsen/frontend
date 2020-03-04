import React from 'react';
import {Route} from 'react-router-native';
import Home from '../Views/Home';
import TherapistLogin from '../Views/TherapistLogin';
import PatientLoggin from '../Views/PatientLoggin';

export default () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/therapistLogin" component={TherapistLogin} />
      <Route exact path="/patientLogin" component={PatientLoggin} />
    </>
  );
};
