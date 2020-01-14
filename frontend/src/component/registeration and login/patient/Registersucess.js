import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const checkc = <FontAwesomeIcon icon={faCheckCircle} size='6x' color='green' />

function Registersucess() {

    return(
        <div className="Registersucess">
            <div id="rsucess">{checkc}
            Registered Successfully !
            You can now login <Link to="/login">here</Link>
        </div>
        </div>
    );
}

export default Registersucess;