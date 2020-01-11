import React from "react";
import { Route, Switch } from "react-router-dom";
import Userdash from './Userdash';
import booking from './component/patient/booking/Booking';
import login from './Login';
import register from './component/registeration/Register';
import stafflogin from './Stafflogin';
import patient from './component/patient/Patient';
import reportview from './component/patient/Reportview';
import doctor from './Doctor';
import patientinfo from './component/patient/Patientinfo';
import lab from './Lab';
import pendingtests from './component/patient/Pendingtests';
import testresults from './Testresults';
import admin from './component/admin/Admin';
import adddoctor from './component/admin/Adddoctor';
import addlab from './component/admin/Addlab';
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