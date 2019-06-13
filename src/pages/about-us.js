import React from 'react';

import dr1 from '../images/Dra-Mitch-1.jpg';
import dr2 from '../images/Dra-Mitch-2.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutUs = props => (
  <Layout location={props.location}>
    <SEO title="About Us" />
    <div className="page">
      <div>
        <h1>About Us</h1>
        <div class="about-us-images">
          <img src={dr1} alt="" className="smaller" />
          <img src={dr2} alt="" className="smaller" />
        </div>
        <h2>MICHELLE RAGMA-GLIANE, O.D</h2>

        <p>
          Meet the experienced and friendly Optometrist of Gliane Optical
          Clinic.
        </p>
        <p>
          Dr. Gliane has over 20 years of experience. She studied doctor of
          Optometry at Centro Escolar University. After practicing abroad for 10
          years, she decided to go back to Philippines and focus in serving
          Filipino patients. Giving people world-class eye care in a very
          affordable price.
        </p>
        <p>
          The Dr. Gliane work hard to stay current on the latest advances in eye
          health and vision care and they regularly attend continuing education
          seminars and advanced training courses both local and abroad. It is
          because of their dedication to continuing education that our patients
          receive the most modern and progressive vision care available. Each
          year, we make sure to reinvest some of the profit of the clinic back
          into the office by purchasing some of the most advanced diagnostic
          technology available. Through the years, we have made our own house
          brand of lenses and frames which are all with high quality branded
          eyewear to give the patient the highest quality of products in a
          budget friendly prices.
        </p>

        <h4>MISSION</h4>
        <p className="pushed">
          Gliane Optical Clinic’s mission is to provide exceptional and quality
          eye care to everyone through the service of specially trained and
          highly competent optometrist, and with the aid of modern ophthalmic
          technology. We focus on eye care for improvement and preservation of
          sight.
        </p>
        <h4>VISION</h4>
        <p className="pushed">
          Gliane Optical Clinic, through its dedicated service of providing
          quality eye care service, envisions a brighter future for all sectors
          of the society. Our clinic will continue to be at the forefront by
          updating itself with the latest knowledge and technology. We aim to be
          a regional leader in the field of eye care as it leads the way for the
          preservation of sight and improving the quality of life for every
          people.
        </p>
        <h4>Values</h4>
        <div className="values">
          <h5>
            <span className="bigger">I</span>-Care
          </h5>
        </div>
        <div className="values">
          <h5>
            <span className="bigger">I</span>NTEGRITY -{' '}
            <span className="content">
              Creating an atmosphere of openness, honesty, and transparency to
              our patients
            </span>
          </h5>
        </div>
        <div className="values">
          <h5>
            <span className="bigger">C</span>ONFIDENTIALITY -{' '}
            <span className="content">
              We are committed to keep patient information in full confidential.
            </span>
          </h5>
        </div>
        <div className="values">
          <h5>
            <span className="bigger">A</span>TTITUDE -{' '}
            <span className="content">
              We treat our patients like a family. Making them feel comfortable
              by approaching them with highest
            </span>
            class of service.
          </h5>
        </div>
        <div className="values">
          <h5>
            <span className="bigger">R</span>ESPECT -{' '}
            <span className="content">
              We treat each patient, those we serve and those whom we work with
              the highest professionalism.
            </span>
          </h5>
        </div>
        <div className="values">
          <h5>
            <span className="bigger">E</span>QUALITY -{' '}
            <span className="content">
              We provide care equal to all people that does not vary in quantity
              because of personal characteristics such as gender, ethnicity,
              geographic location &amp; socio-economic status.
            </span>
          </h5>
        </div>
        <div className="values">
          <h5>
            <span className="bigger">T</span>AG LINE -{' '}
            <span className="content">GO for better vision</span>
          </h5>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutUs;
