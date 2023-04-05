import React from 'react';
import "../conponent/index.scss";

const Footer = () => {
    return (
        <footer className="flex-rw">
  
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">About Pavilion</h4></li>
    <li><a href='/shop/about-mission' className="generic-anchor footer-list-anchor" itemProp="significantLink">GET TO KNOW US</a></li>
    <li><a href='/promos.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">PROMOS</a></li>
    <li><a href='/retailers/new-retailers.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">BECOME A RETAILER</a></li>

    <li><a href='/job-openings.html' itemProp="significantLink" className="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>

    <li><a href='/shop/about-show-schedule' className="generic-anchor footer-list-anchor" itemProp="significantLink">EVENTS</a></li>
  </ul>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">The Gift Selection</h4></li>


    <li><a href='/Angels/cat/id/70' className="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
    <li><a href='/Home-Decor/cat/id/64' className="generic-anchor footer-list-anchor">HOME DECOR</a></li>
    <li><a href='/Mugs/cat/id/32' className="generic-anchor footer-list-anchor">MUGS</a></li>
    <li><a href='/Pet-Lover/cat/id/108' className="generic-anchor footer-list-anchor">PET LOVER</a></li>
    <li><a href='/Ladies-Accessories/cat/id/117' className="generic-anchor footer-list-anchor" target="_blank">HANDBAGS & JEWELRY</a></li>
  </ul>
  <ul className="footer-list-top">
    <li id='help'>
      <h4 className="footer-list-header">Please Help Me</h4></li>
    <li><a href='/shop/about-contact' className="generic-anchor footer-list-anchor" itemProp="significantLink">CONTACT</a></li>
    <li><a href='/faq.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">FAQ</a></li>
    <li id='find-a-store'><a href='/shop/store-locator' className="generic-anchor footer-list-anchor" itemProp="significantLink">STORE LOCATOR</a></li>
    <li id='user-registration'><a href='/shop/user-registration?URL=' className="generic-anchor footer-list-anchor" itemProp="significantLink">NEW USERS</a></li>
    <li id='order-tracking'><a href='/shop/order-status' itemProp="significantLink" className="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
  </ul>
  <section className="footer-social-section flex-rw">
      
      <span className="footer-social-overlap footer-social-icons-wrapper">
      <a href="https://www.pinterest.com/paviliongift/" className="generic-anchor" target="_blank" title="Pinterest" itemProp="significantLink"><i className="fa fa-pinterest"></i></a>
      <a href="https://www.facebook.com/paviliongift" className="generic-anchor" target="_blank" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook"></i></a>
      <a href="https://twitter.com/PavilionGiftCo" className="generic-anchor" target="_blank" title="Twitter" itemProp="significantLink"><i className="fa fa-twitter"></i></a>
      <a href="http://instagram.com/paviliongiftcompany" className="generic-anchor" target="_blank" title="Instagram" itemProp="significantLink"><i className="fa fa-instagram"></i></a>
      <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" className="generic-anchor" target="_blank" title="Youtube" itemProp="significantLink"><i className="fa fa-youtube"></i></a>
      <a href="https://plus.google.com/+Paviliongift/posts" className="generic-anchor" target="_blank" title="Google Plus" itemProp="significantLink"><i className="fa fa-google-plus"></i></a>
      </span>
  </section>
  <section className="footer-bottom-section flex-rw">
<div className="footer-bottom-wrapper">   
<i className="fa fa-copyright" role="copyright">
 
</i> 
    </div>
    <div className="footer-bottom-wrapper">
    
      </div>
  </section>
</footer>
    );
};

export default Footer;