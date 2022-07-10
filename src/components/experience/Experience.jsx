import React from "react";
import "./experience.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiFigma } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiCss3 className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiJavascript className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <GrReactjs className="experience_details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillBootstrapFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiFigma className="experience_details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoLogoNodejs className="experience_details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMysql className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiJava className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMongodb className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiPython className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
