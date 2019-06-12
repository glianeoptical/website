import React from 'react';
import { Link } from 'gatsby';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import daughters from '../images/daughters.png';
import family from '../images/family.png';
import sons from '../images/sons.png';

const IndexPage = props => {
  const SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    showArrows: false,
    cssEase: 'linear'
  };

  return (
    <Layout location={props.location}>
      <SEO title="Home - Gliane Optical" />
      {/* <div className="page-content"> */}
      <div className="page">
        {/* <div style={{ margin: '0 auto', width: '90%' }}> */}
        <div className="carousel-container">
          <Slider {...SLIDER_SETTINGS}>
            <div className="landing-carousel">
              <h2 className="carousel-header green-text">
                Experience Comprehensive High Level Eye Care
              </h2>
              <div className="carousel-content">
                <div>
                  <p className="carousel-text-left">
                    Gliane Optical Click Offers a comprehensive eye care
                    Services and affordable lenses and frames to Filipino
                    people. Click or call us and access the highest quality of
                    vision you deserve.
                  </p>
                  <div className="appointment">
                    <div>
                      <a hre="#" className="button">
                        Request Appointment
                      </a>
                    </div>
                    <div className="contact">
                      <em>Or give us a call</em>
                      <p className="contact-number">
                        <strong>0917-620-4759</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <img src={daughters} className="banner" />
              </div>
            </div>
            <div className="landing-carousel">
              <h2 className="carousel-header">Protection for young eyes</h2>
              <div className="carousel-content">
                <div>
                  <p className="carousel-text-left">
                    Gliane Optical Clinic is aware of harmful blue light from
                    digital screens, artificial light, and the sun so we offer
                    photogray multicoated lens with UV 400.
                  </p>
                  <div className="appointment">
                    <div>
                      <a hre="#" className="button blue">
                        Request Appointment
                      </a>
                    </div>
                    <div class="contact">
                      <em>Or give us a call</em>
                      <p className="contact-number">
                        <strong>0917-620-4759</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <img src={sons} className="banner" style={{ height: '80%' }} />
              </div>
            </div>
            <div className="landing-carousel">
              <h2 className="carousel-header centered">
                Eye Care for your whole family
              </h2>
              <div className="carousel-content">
                <img
                  src={family}
                  className="banner"
                  style={{ height: '80%' }}
                />
                <div className="carousel-text-left">
                  <div>
                    <p>
                      Like a family who is most important part of our life, our
                      eyes are an important part of your health.
                    </p>
                    <p>
                      A great eye care begins with regular eye check-up. Call us
                      now.
                    </p>
                    <div className="appointment">
                      <a hre="#" className="button green">
                        Request Appointment
                      </a>
                    </div>
                  </div>

                  <div class="contact">
                    <em>Or give us a call</em>
                    <p className="contact-number">
                      <strong>0917-620-4759</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <h1>Welcome to Gliane Optical Clinic</h1>

        <p>
          Our eyes are an important part of your health. Most people rely on
          their eyes to see and make sense of the world around them. But some
          eye diseases can lead to vision loss, so it is important to identify
          and treat eye diseases as early as possible. You should get your eyes
          checked as often as your health care provider recommends it, or if you
          have any new vision problems. And just as it is important to keep your
          body healthy, you also need to keep your eyes healthy. For over 20
          years of eye care expertise, We, at Gliane Optical Clinic is committed
          to provide everyone the highest level of eye care in a very affordable
          price.
        </p>
        <p>
          Our doctors provide free consultation and discuss the best treatment
          for our patient. We give one-on-one attention to each patient to have
          a personalized eye care they need. Our clinic is dedicated to serve
          and treat our patient like a family.
        </p>
      </div>
      {/* </div> */}
      {/* </div> */}
    </Layout>
  );
};

export default IndexPage;
