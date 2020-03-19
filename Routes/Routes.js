import React from 'react';
import { Route } from 'react-router-native';
import TherapistLogin from '../Views/AdminViews/TherapistLogin';
import PatientLoggin from '../Views/PatientViews/PatientLoggin';
import SendAssignment from '../Views/AdminViews/SendAssignment';
import AssignmentList from '../Views/PatientViews/AssignmentList';
import AdminHome from '../Views/AdminViews/AdminHome';
import PatientHome from '../Views/PatientViews/PatientHome';
import Gravling from '../Views/Gravling';
import FetchForm from '../Views/PatientViews/FetchForm'

export default () => {
  return (
    <>
      <Route exact path="/" component={PatientLoggin} />
      <Route exact path="/therapistLogin" component={TherapistLogin} />
      <Route exact path="/sendassignment" component={SendAssignment} />
      <Route exact path="/gravling" component={Gravling} />
      <Route exact path="/assignmentlist" component={AssignmentList} />
      <Route exact path="/adminhome" component={AdminHome} />
      <Route exact path="/patienthome" component={PatientHome} />
      <Route exact path="/fetchform/:_id" component={FetchForm} />

    </>
  );
};

