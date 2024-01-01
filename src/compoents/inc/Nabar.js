import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAddressBook, faBan } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'; // Import the styles
import Logo from '../images/travel.jpg'

class Navbar extends React.Component {
     render() {
          return (
               <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                    <div class="container-fluid">
                         <Link to="/" class="navbar-brand">
                              <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt="Bootstrap Logo" />
                              Topa
                         </Link>
                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                         </button>
                         <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li class="nav-item">
                                        <Link to="/" class="nav-link active"><FontAwesomeIcon icon={faHouse} />Home</Link>

                                   </li>
                                   <li class="nav-item">
                                        <Link to="/about" class="nav-link active"><FontAwesomeIcon icon={faBan} />About</Link>

                                   </li>
                                   <li class="nav-item">
                                        <Link to="/contact" class="nav-link active"><FontAwesomeIcon icon={faAddressBook} />Contact</Link>

                                   </li>
                              </ul>
                              <form class="d-flex" role="search">
                                   <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                   <button class="btn btn-outline-success" type="submit">Search</button>
                              </form>
                         </div>
                    </div>
               </nav>
          )
     }
}
export default Navbar;