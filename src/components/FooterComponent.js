import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer bg-dark mt-5">
            <div className="container-fluid">
                <div className="row pt-3 px-3">
                    <div className="col-sm-5 text-decoration-none pb-4 pb-md-1">
                        <h5 className="text-light text-uppercase">Contact Us</h5>
                        <address className="text-light">
                            1234 Main Street <br />
                            Grosse Pointe, MI 48236
                        </address>
                        <a href="tel:+1248XXXXXXX" className="text-light">248-XXX-XXXX</a><br />
                        <a href="mailtoCalicoCafe@gmail.com" className="text-light">CalicoCafe@gmail.com</a>
                    </div>
                    <div className="col-sm-4 pb-3">
                        <h5 className="text-light text-uppercase">Hours</h5>
                        <ul className="list-unstyled text-decoration-none text-light text-sm-left">
                            <li><span className="font-weight-bold">Monday - Friday:</span>  10AM - 6PM</li>
                            <li><span className="font-weight-bold">Saturday:</span>  10AM - 6PM</li>
                            <li><span className="font-weight-bold">Sunday:</span>  10AM - 6PM</li>
                        </ul>
                    </div>
                    <div className="col-sm-3 pb-0">
                        <ul className="list-unstyled text-uppercase text-decoration-none text-sm-right links">
                            <li><Link to="/home" className="text-light text-decoration-none">Home</Link></li>
                            <li><Link to="/visit" className="text-light text-decoration-none">Visit</Link></li>
                            <li><Link to="/adopt" className="text-light text-decoration-none">Adopt</Link></li>
                            <li><Link to="/events" className="text-light text-decoration-none">Events</Link></li>
                           {/* <li><Link to="/" className="text-light text-decoration-none">Menu</Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className="row pb-2">
                    <div className="col-sm-5 mx-auto text-sm-center">
                        <a className="btn" href="http://instagram.com/"><i className="fa fa-instagram fa-lg text-light"></i></a>
                        <a className="btn" href="http://facebook.com/"><i className="fa fa-facebook fa-lg text-light"></i></a>
                        <a className="btn" href="http://twitter.com/"><i className="fa fa-twitter fa-lg text-light"></i></a>
                        <a className="btn" href="http://pinterest.com/"><i className="fa fa-pinterest fa-lg text-light"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;