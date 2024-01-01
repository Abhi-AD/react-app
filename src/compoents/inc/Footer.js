import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faHouse, faAddressBook, faBan } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'; // Import the styles


class Footer extends React.Component {
     render() {
          return (
               <section className="section footer bg-dark text-white">
                    <div className="contatiner">
                         <div className="row">
                              <div className="col-md-4">
                                   <h6>Comapny Information</h6>
                                   <hr />
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.</p>
                              </div>
                              <div className="col-md-4">
                                   <h6> Quick Link</h6>
                                   <hr />
                                   <div><Link to=""><FontAwesomeIcon icon={faHouse} />Home</Link></div>
                                   <div><Link to="/about"><FontAwesomeIcon icon={faBan} />About</Link></div>
                                   <div><Link to="/contact"><FontAwesomeIcon icon={faAddressBook} />Contact</Link></div>
                              </div>
                              <div className="col-md-4">
                                   <h6>Contact Information</h6>
                                   <hr />
                                   <div><p className="text-white mb-1"><FontAwesomeIcon icon={faLocationDot} />Lazimpat, Kathamandu</p></div>
                                   <div><p className="text-white mb-1"><FontAwesomeIcon icon={faPhone} />+977 9851177086</p></div>
                                   <div><p className="text-white mb-1"><FontAwesomeIcon icon={faEnvelope} />topabhumitravel@gmail.com</p></div>
                              </div>
                         </div>
                    </div>
               </section >
          )
     }
}
export default Footer;