import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import booking from './component/patient/booking/Booking';
import login from './component/registeration and login/patient/Login';
import register from './component/registeration and login/patient/Register';
import stafflogin from './component/registeration and login/staff/Stafflogin';
import patient from './component/patient/Patient';
import reportview from './component/patient/report/Reportview';
import reportupload from './component/patient/report/Reportupload';
import doctor from './component/doctor/Doctor';
import patientinfo from './component/doctor/Patientinfo';
import lab from './component/lab/Lab';
import pendingtests from './component/lab/Pendingtests';
import BookingAppointment from './component/lab/BookingAppointment';
import testresults from './component/lab/Testresults';
import admin from './component/admin/Admin';
import adddoctor from './component/admin/Adddoctor';
import addlab from './component/admin/Addlab';
import registersuccess from './component/registeration and login/patient/Registersucess';
import NotFound from './NotFound';
import App from "./App";
import ProtectedRoute from "./Protected.route";

const Routes = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <ProtectedRoute exact path="/booking" component={booking} />
                <Route path="/login" component={login} />
                <Route path="/register" component={register} />
                <ProtectedRoute path="/registersuccess" component={registersuccess} />
                <ProtectedRoute path="/stafflogin" component={stafflogin} />
                <ProtectedRoute path="/patient" component={patient} />
                <ProtectedRoute path="/reportview" component={reportview} />
                <ProtectedRoute path="/reportupload" component={reportupload} />
                <ProtectedRoute path="/doctor" component={doctor} />
                <ProtectedRoute path="/patientinfo" component={patientinfo} />
                <ProtectedRoute path="/lab" component={lab} />
                <ProtectedRoute path="/pendingtests" component={pendingtests} />
                <ProtectedRoute path="/testresults" component={testresults} />
                <ProtectedRoute path="/admin" component={admin} />
                <ProtectedRoute path="/bookingappointment" component={BookingAppointment} />
                <ProtectedRoute path="/adddoctor" component={adddoctor} />
                <ProtectedRoute path="/addlab" component={addlab} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes;