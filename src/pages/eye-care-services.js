import React from 'react';
import { Link } from 'gatsby';

import colorBlind from '../images/color_blind_eye_exam.png';
import eyeCare from './../images/eye-care.jpg';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Eye Care Services" />
    <div className="eye-care-banner">
      <h1 className="yellow-text">Eye Care Services</h1>
    </div>

    <ul className="bullet">
      <li>
        <h4>Eye Check-up General</h4>
        <p>
          We don’t just sell eyeglasses and sunglasses; we also see to it that
          we checked your eyes and give you the correct prescription. We offer
          computerized eye check-up performed by licensed optometrists.
        </p>
      </li>
      <li className="separator">
        <h4>Color Vision Test</h4>
        <p>
          A color blind test is a device your eye doctor uses to determine if
          you have a color vision deficiency, commonly known as color blindness.
        </p>
        <div>
          There are two types of color blind tests:
          <ul>
            <li>
              Screening tests that can detect the presence of a color vision
              problem
            </li>
            <li>
              More detailed, quantitative tests that can detect a color vision
              deficiency and determine the type and severity of color blindness
            </li>
          </ul>
          <img src={colorBlind} alt="Color Blind" />
        </div>
      </li>
      <li className="separator">
        <h4>Binocular Vision</h4>
        <p>
          What we see is the result of signals sent from the eyes to the brain.
          Usually the brain receives signals from both (bi) eyes (ocular) at the
          same time. The information contained in the signal from each eye is
          slightly different and with well-functioning binocular vision, the
          brain is able to use these differences to judge distances and
          coordinate eye movements.
        </p>
        <p>
          Binocular vision anomalies are among the most common visual disorders.
          They are usually associated with symptoms such as headaches, eye
          strain, eye pain, blurred vision, and occasionally double vision.
          There are many reasons binocular vision might become reduced or lost
          altogether, including:s
        </p>
        <ul>
          <li>Reduced vision in one eye</li>
          <li>
            Loss of coordination of movement between the two eyes (strabismus)
          </li>
          <li>Problems with the brain comparing images from both eyes</li>
        </ul>
      </li>
      <li className="separator">
        <h4>Diagnosis</h4>
      </li>
      <li>
        <h4>Contract Lenses</h4>
      </li>
      <li>
        <h4>Eye Glasses</h4>
      </li>
      <li>
        <h4>Prescription Sunglasses</h4>
      </li>
      <li>
        <h4>Cataract Screening</h4>
      </li>
    </ul>
  </Layout>
);

export default SecondPage;
