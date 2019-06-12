import React from 'react';
import { Link } from 'gatsby';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

import fti1 from '../images/branches/fti-1.jpg';
import fti2 from '../images/branches/fti-2.jpg';

import sm1 from '../images/branches/savemore1.jpg';
import sm2 from '../images/branches/saemore2.jpg';

import mlq1 from '../images/branches/mlq-1.jpg';
import mlq2 from '../images/branches/mlq-2.jpg';
import mlq3 from '../images/branches/mlq-3.jpg';

import pat1 from '../images/branches/pat-1.jpg';
import pat2 from '../images/branches/pat-2.jpg';
import pat3 from '../images/branches/pat-3.jpg';

import lu1 from '../images/branches/lu-1.jpg';
import lu2 from '../images/branches/lu-2.jpg';
import lu3 from '../images/branches/lu-3.jpg';

import Map from '../components/Map';

const SecondPage = props => (
  <Layout location={props.location}>
    <SEO title="Contact Us" />
    <div className="contact-us-banner">
      <h1 className="red-text">Contact Us</h1>
      <p className="red-text">Please see our branches below</p>
    </div>

    <div className="branch">
      <div className="content">
        <h4>FTI Hypermaket Taguig</h4>
        <p>FTI Hypermaket Taguig</p>
        <p>Monday to Sunday 9:00am to 9:00pm</p>
        <p className="phone">(0917) 115-5706</p>
        <Map lat={14.50237} lng={121.04357} text="FTI Hypermaket Taguig" />
      </div>
      <div className="images">
        <Carousel showArrows={true}>
          <img src={fti1} alt="" />
          <img src={fti2} alt="" />
        </Carousel>
      </div>
    </div>
    <div className="branch">
      <div className="content">
        <h4>Savemore Acacia Estate Taguig</h4>
        <p>
          Savemore Market Town Center Acacia Estates Brgy, Taguig, Metro Manila
        </p>
        <p>Monday to Sunday 9:00am to 9:00pm</p>
        <p className="phone">(0917) 354-5951</p>
        <Map
          lat={14.47816}
          lng={121.05721}
          text="Savemore Acacia Estate Taguig"
        />
      </div>
      <div className="images">
        <Carousel showArrows={true}>
          <img src={sm1} alt="" />
          <img src={sm2} alt="" />
        </Carousel>
      </div>
    </div>
    <div className="branch">
      <div className="content">
        <h4>M.L Quezon St. Taguig</h4>
        <p>6 M. L. Quezon Avenue, Taguig, 1632 Metro Manila</p>
        <p>Monday to Saturday 9:00am to 7:30pm</p>
        <p className="phone">(0917) 620-4759</p>
        <Map lat={14.48855} lng={121.06086} text="M.L Quezon St. Taguig" />
      </div>
      <div className="images">
        <Carousel showArrows={true}>
          <img src={mlq1} alt="" />
          <img src={mlq2} alt="" />
          <img src={mlq3} alt="" />
        </Carousel>
      </div>
    </div>

    <div className="branch">
      <div className="content">
        <h4>Morcilla Arcade Pateros</h4>
        <p>
          2<sup>nd</sup> floor. Morcilla St, Pateros, 1621 Metro Manila
        </p>
        <p>Monday to Saturday 9:00am to 7:30pm</p>
        <p className="phone">(0917) 824-0213</p>
        <Map lat={14.54418} lng={121.06837} text="Morcilla Arcade Pateros" />
      </div>
      <div className="images">
        <Carousel showArrows={true}>
          <img src={pat1} alt="" />
          <img src={pat2} alt="" />
          <img src={pat3} alt="" />
        </Carousel>
      </div>
    </div>

    <div className="branch">
      <div className="content">
        <h4>Luna La Union</h4>
        <p>Zambrano Bldg., Salcedo Luna, La Union (beside Municipal Hall)</p>
        <p>Monday to Saturday 8:00am to 6:00pm</p>
        <p className="phone">(0096) 6894-5077</p>
        <Map lat={16.84669} lng={120.38335} text="Luna La Union" />
      </div>
      <div className="images">
        <Carousel showArrows={true}>
          <img src={lu1} alt="" />
          <img src={lu2} alt="" />
          <img src={lu3} alt="" />
        </Carousel>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
