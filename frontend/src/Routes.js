import React from "react";
import { Route, Switch } from "react-router-dom";
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
import ProtecedRoute from './Protected.route'


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <ProtecedRoute exact path="/booking" component={booking} />
                <Route path="/login" component={login} />
                <Route path="/register" component={register} />
                <Route path="/registersuccess" component={registersuccess} />
                <Route path="/stafflogin" component={stafflogin} />
                <ProtecedRoute path="/patient" component={patient} />
                <Route path="/reportview" component={reportview} />
                <ProtecedRoute path="/reportupload" component={reportupload} />
                <ProtecedRoute path="/doctor" component={doctor} />
                <ProtecedRoute path="/patientinfo" component={patientinfo} />
                <ProtecedRoute path="/lab" component={lab} />
                <ProtecedRoute path="/pendingtests" component={pendingtests} />
                <ProtecedRoute path="/testresults" component={testresults} />
                <ProtecedRoute path="/admin" component={admin} />
                <ProtecedRoute path="/bookingappointment" component={BookingAppointment} />
                <ProtecedRoute path="/adddoctor" component={adddoctor} />
                <ProtecedRoute path="/addlab" component={addlab} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes;