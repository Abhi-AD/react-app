import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'



class Contact extends React.Component {
     render() {
          return (
               <div>
                    <div>
                         <section className="py-4 bg-info">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-md-4 my-auto">
                                             <h4>Contact Us</h4>
                                        </div>
                                        <div className="col-md-8 my-auto">
                                             <h6 className="float-end">
                                                  Home /Contact Us
                                             </h6>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         <div className="container">
                              <div className="card mt-4">
                                   <div className="card-body">
                                        <form>
                                             <div class="form-group">
                                                  <label for="name">Name:</label>
                                                  <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                             </div>
                                             <div class="form-group">
                                                  <label for="email">Email:</label>
                                                  <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                             </div>
                                             <div class="form-group">
                                                  <label for="message">Message:</label>
                                                  <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                                             </div>
                                             <button type="submit" class="btn btn-primary">Submit</button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          );
     }
}
export default Contact;