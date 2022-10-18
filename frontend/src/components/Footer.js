import React from 'react';

import './Footer.models.css';

function Footer () {

  return (
    <section className="footer2">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="#" target="_blank" rel="noopener noreferrer">Welcome to visit us!</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
           FLOWERS OF PARIS
          </section>
          <section className="footer-info__returns">
            Returns Policy
          </section>     
          <section className="footer-info__returns1">
            Delivery
          </section>     
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            bostonPastry@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
          </section>
          <section className="footer-info__terms1">
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            6179997888
          </section>
          <section className="footer-info__contact">
            360 Huntington Ave
            Boston,MA 02115
          </section>
          <section className="footer-info__contact1">
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;