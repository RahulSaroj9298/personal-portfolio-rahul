import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="contanier services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icons" />
              <p>Develop the user interface.</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Design logo for the company.</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Create ux element interactions.</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Position your company brand.</p>
            </li>
          </ul>
        </article>

        {/*=========END OF UI/UX=========*/}

        <article className="service">
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icons" />
              <p>Design webpages for the company.</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Interactive and Dyamic webpages.</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Solving the problem of user's interaction.</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Build and deploy website .</p>
            </li>
          </ul>
        </article>

        {/*=========END OF WEBDEVELOPMENT=========*/}

        <article className="service">
          <div className="service_head">
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icons" />
              <p>Design content for the different company.</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Manage their social handle</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Build Branding of the company</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>Design theme based poster and pages</p>
            </li>
          </ul>
        </article>

        {/*=========END OF CONTENT CREATION=========*/}
      </div>
    </section>
  );
};

export default Services;
