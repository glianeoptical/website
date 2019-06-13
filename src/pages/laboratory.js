import React from 'react';
import { Link } from 'gatsby';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

import frame1 from '../images/frames/1.jpg';
import frame2 from '../images/frames/2.jpg';
import frame8 from '../images/frames/8.jpg';
import frame9 from '../images/frames/9.jpg';

import dri1 from '../images/frames/dri1.jpg';
import dri2 from '../images/frames/dri2.jpg';
import dri3 from '../images/frames/dri3.jpg';
import dri4 from '../images/frames/dri4.jpg';

import lense1 from '../images/lenses/1.jpg';
import lense2 from '../images/lenses/2.jpg';

import lab1 from '../images/laboratory/1.jpg';
import lab2 from '../images/laboratory/2.jpg';
import lab3 from '../images/laboratory/3.jpg';
import lab4 from '../images/laboratory/4.jpg';
import lab6 from '../images/laboratory/6.jpg';
import lab7 from '../images/laboratory/7.jpg';
class Laboratory extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Laboratory" />
        <div className="page">
          <div>
            <div className="laboratory-banner">
              <h1>Laboratory</h1>
            </div>
            <p>
              Gliane Optical Clinic has its own eyewear laboratory / GH Optical
              Laboratory. Our state of the art laboratory will produce you RX
              with precision. Everyday hundreds of prescriptions are processed
              in our GH lab. Each order is quality inspected by our trained
              staff and sent to our retail and medical partners at the lowest
              price possible. Rest assured that both you and your patients are
              in good hands with GH Optical Laboratory.
            </p>
            <p>&nbsp;</p>
            <Carousel showArrows={true}>
              <img src={lab1} alt="" />
              <img src={lab2} alt="" />
              <img src={lab3} alt="" />
              <img src={lab4} alt="" />
              <img src={lab6} alt="" />
              <img src={lab7} alt="" />
            </Carousel>
            <h2>Lenses</h2>
            <p>&nbsp;</p>
            <p>We distribute wide variety of optical lenses such as:</p>
            <ul className="left-padded">
              <li>Single Vision Ordinary</li>
              <li>Single Vision Multicoated</li>
              <li>Single Vision Photogray Mc</li>
              <li>Single Vision hi-index 1.61mc</li>
              <li>Single Vision Blublock</li>
              <li>Round Top-UC, MC and Transition</li>
              <li>Flat top-UC</li>
              <li>Progressive-UC, MC and Transition</li>
            </ul>
            <p>&nbsp;</p>
            <p>
              We distribute lenses and frame nationwide and abroad. We also
              offer bulk orders, online services and deliver orders the same
              day. Call us for inquiry Tel. <strong>(02) 2384999</strong> or{' '}
              <strong>09268752003</strong> or click <a href="#">here</a> to send
              us a message.
            </p>
            <h3>Lense Images</h3>
            <Carousel showArrows={true}>
              <div>
                <img src={lense1} alt="" />
                <p className="legend">
                  <em>Photogray multicoated lens with UV 400</em>
                </p>
              </div>
              <div>
                <img src={lense2}></img>
                <p className="legend">
                  <em>Photogray multicoated lens with UV 400</em>
                </p>
              </div>
            </Carousel>
            <p className="legend">
              <em>Photogray multicoated lens with UV 400</em>
            </p>

            <h3>House Brand Eyewear – are all made in Japan</h3>
            <h4>GH Eyewear</h4>
            <Carousel showArrows={true}>
              <div>
                <img src={frame1} alt="" />
                <p></p>
              </div>
              <div>
                <img src={frame2}></img>
                <p></p>
              </div>
              <div>
                <img src={frame8}></img>
                <p></p>
              </div>
              <div>
                <img src={frame9}></img>
                <p></p>
              </div>
            </Carousel>
            <h4>Dr. I</h4>
            <Carousel showArrows={true}>
              <div>
                <img src={dri1} alt="" />
                <p></p>
              </div>
              <div>
                <img src={dri2}></img>
                <p></p>
              </div>
              <div>
                <img src={dri3}></img>
                <p></p>
              </div>
              <div>
                <img src={dri4}></img>
                <p></p>
              </div>
            </Carousel>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Laboratory;
