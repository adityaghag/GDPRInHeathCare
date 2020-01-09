import React from "react";
import { Route, Switch } from "react-router-dom";
import Userdash from './Userdash';
import booking from './Booking';
import login from './Login';
import register from './Register';
import stafflogin from './Stafflogin';
import patient from './Patient';
import reportview from './Reportview';
import doctor from './Doctor';
import patientinfo from './Patientinfo';
import lab from './Lab';
import pendingtests from './Pendingtests';
import testresults from './Testresults';
import admin from './Admin';
import adddoctor from './Adddoctor';
import addlab from './Addlab';
import NotFound from './NotFound';
import App from "./App";

const Routes = () => {
    return (
        <div>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/user" component={Userdash} />
            <Route path="/booking" component={booking} />
            <Route path="/login" component={login} />
            <Route path="/register" component={register} />
            <Route path="/stafflogin" component={stafflogin} />
            <Route path="/patient" component={patient} />
            <Route path="/reportview" component={reportview} />
            <Route path="/doctor" component={doctor} />
            <Route path="/patientinfo" component={patientinfo} />
            <Route path="/lab" component={lab} />
            <Route path="/pendingtests" component={pendingtests} />
            <Route path="/testresults" component={testresults} />
            <Route path="/admin" component={admin} />
            <Route path="/adddoctor" component={adddoctor} />
            <Route path="/addlab" component={addlab} />
            <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes;