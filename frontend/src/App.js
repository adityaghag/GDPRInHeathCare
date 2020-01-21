import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faHome, faInfo, faUser, faProcedures, faHospital, faHospitalSymbol, faStethoscope, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import WOW from 'wow.js';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


const logo = <FontAwesomeIcon icon={faHeartbeat} />
const home = <FontAwesomeIcon icon={faHome} />
const about = <FontAwesomeIcon icon={faInfo} />
const user = <FontAwesomeIcon icon={faUser} />
const services = <FontAwesomeIcon icon={faProcedures} />
const service_1 = <FontAwesomeIcon icon={faHospital} size='5x' />
const service_2 = <FontAwesomeIcon icon={faHospitalSymbol} size='5x' />
const service_3 = <FontAwesomeIcon icon={faStethoscope} size='5x' />
const service_4 = <FontAwesomeIcon icon={faAmbulance} size='5x' />

function App() {

	new WOW().init();

	return (
		<div className="App">
			<section id="top">
				<Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
					<Navbar.Brand href="#home">{logo} HSRW Hospital</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home {home}</Nav.Link>
							<Nav.Link href="#about">About {about}</Nav.Link>
							<Nav.Link href="#services">Services {services}</Nav.Link>
							<Nav.Link><Link to="/login">Login {user}</Link></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</section>
			<section id="main">
				<div className="container-fluid">
					<h1>A National Leader in Healthcare Research</h1>
					<a href="#about"><button type="button" className="btn btn-lg btn-dark shadow-sm p-3 mb-5 rounded"> Know More</button></a>
				</div>
			</section>
			<section id="about">
				<div className="container">
					<h1 className="text-center wow zoomIn">About us</h1>
					<div className="aboutbg wow slideInLeft"></div>
					<p className="wow slideInRight">HSRW Hospital is committed to provide Quality Health Care Services to the community at large and to the needy for maximum patients satisfaction.  It will endeavor for the continuous professional development and skills of its employees and provide them training in the field of medicine, surgery, pediatric, obstetric & gynecology, nursing, medical laboratory technology, radiography, administration etc. </p>
					<p className="wow slideInRight">HSRW Hospital is a 345 bedded Hospital spread over a green campus. The hospital is equipped with modern infrastructure with 30 Emergency beds, 52 beds at ICU, 7 Operation Rooms, CCU, Dialysis, Maternity LR, IPCU, NICU and 37 Outpatient Department Clinics.

Apart from specialized services, the Hospital has strong support services such as In-House Blood Bank, Food Services, Medical Records, Pharmacy, Physiotherapy, Pastoral Care, Maintenance, IT, Laundry and Housekeeping.

The Hospital also has a well-furnished Medical Library comprising of more than 8,500 text books and over 100 National and International Journals and magazines for Staff, Doctors, DNB, Nursing, X-Ray and Lab Students.

More than 50 companies are empanelled with the Hospital for providing credit facility to the patients. </p>

					<p className="wow slideInRight">Our mission is to provide each patient with the world-class care, exceptional service and compassion we would want for our loved ones.</p>


				</div>
			</section>
			<section id="services">
				<div className="container">
					<h1 className="wow zoomIn text-center" data-wow-delay="0.1s">Services</h1>
					<h5 className="wow zoomIn text-center" data-wow-delay="0.3s">HSRW Health services covers the cost of medically necessary hospital services, provided at a hospital.</h5>
					<div className="row">
						<div className="wow bounceInUp col-lg-3 col-md-6 col-sm-12 col-xs-12" data-wow-delay="0.1s">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">Hospital Services</h5>
									<p className="card-text text-center">{service_1}</p>
									<ul>
										<li>Primary care services</li>
										<li>Mental Health</li>
										<li>Dental Services</li>
										<li>Nutritional counselling</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">Lab</h5>
									<p className="card-text text-center">{service_2} </p>
									<ul>
										<li>X-Ray</li>
										<li>Radiology</li>
										<li>Blood</li>
										<li>Surgical</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="wow bounceInUp col-lg-3 col-md-6 col-sm-12 col-xs-12" data-wow-delay="0.6s">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">General Care</h5>
									<p className="card-text text-center">{service_3}</p>
									<ul>
										<li>Family Support</li>
										<li>Genetic Counselling</li>
										<li>Financial Services</li>
										<li>Home Nursing Services</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="wow bounceInUp col-lg-3 col-md-6 col-sm-12 col-xs-12" data-wow-delay="0.8s">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">Emergency Services</h5>
									<p className="card-text text-center">{service_4}</p>
									<ul>
										<li>Private Ambulance</li>
										<li>Advanced Life Support</li>
										<li>First-Aid</li>
										<li>Critical Care Transport</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
