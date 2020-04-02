import React from 'react';
import { Route } from 'react-router-native';
import TherapistLogin from '../Views/AdminViews/TherapistLogin';
import PatientLoggin from '../Views/PatientViews/PatientLoggin';
import SendAssignment from '../Views/AdminViews/SendAssignment';
import AssignmentList from '../Views/PatientViews/AssignmentList';
import AdminHome from '../Views/AdminViews/AdminHome';
import PatientHome from '../Views/PatientViews/PatientHome';
import FetchForm from '../Views/PatientViews/FetchForm'
import Construction from '../Views/Construction'

export default () => {
  return (
    <>
      <Route exact path="/" component={PatientLoggin} />
      <Route exact path="/therapistLogin" component={TherapistLogin} />
      <Route exact path="/sendassignment" component={SendAssignment} />
      <Route exact path="/assignmentlist/:accessToken" component={AssignmentList} />
      <Route exact path="/adminhome" component={AdminHome} />
      <Route exact path="/patienthome/:accessToken" component={PatientHome} />
      <Route exact path="/fetchform/:_id/:accessToken" component={FetchForm} />
      <Route exact path="/fetchform/construction" component={Construction} />
    </>
  );
};

