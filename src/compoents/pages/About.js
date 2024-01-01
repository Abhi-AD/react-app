import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import About1 from '../images/about.jpg'



class About extends React.Component {
     render() {
          return (
               <div>
                    <div>
                         <section className="py-4 bg-info">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-md-4 my-auto">
                                             <h4>About Us</h4>
                                        </div>
                                        <div className="col-md-8 my-auto">
                                             <h6 className="float-end">
                                                  Home /About Us
                                             </h6>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         <div className="container">
                              <div className="card mt-4">
                                   <div className="card-body">

                                        <h1 className="text-center">About Us</h1><br /><br />
                                        <p className="lead text-justify">
                                             Welcome to Tapobhumi Travels, where Travel is the best way to learn about the world and how it works. Our experiences both travelling and working in travel have led us to where we are today, and to Welcome to Travel’s Mission Statement, Vision Statement and Values.. We were founded in [year] with a passion for [your industry/niche].
                                             At Tapobhumi Travels, we strive for excellence in [specific aspects of your business]. Our dedicated team of professionals is committed to [achieving specific goals or outcomes].
                                             Our values are at the core of everything we do. [List your core values and explain how they guide your company's decisions and actions.] We believe in [specific beliefs or principles] and aim to [desired impact or contribution to the community/industry].
                                             Meet the faces behind Tapobhumi Travels. Our diverse team brings together a wealth of experience in [relevant fields]. We are united by our passion for [industry/niche] and our commitment to [specific aspects of your mission].
                                             [Optional: Highlight key team members or departments, sharing brief bios and roles. You can also include images for a personal touch.]
                                             Whether you're a customer, partner, or just curious about Tapobhumi Travels, we're excited to have you on this journey with us. Feel free to [contact us/reach out] with any questions or collaborations.
                                        </p>
                                        <hr />
                                        <div className="row">
                                             <div className="col-md-6 col-sm-6">
                                                  <img src={About1} alt="About us" width="300px" />

                                             </div>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          );
     }
}
export default About;