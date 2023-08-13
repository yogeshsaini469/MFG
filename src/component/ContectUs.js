import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2><span>Liên Hệ </span> Chúng Tôi</h2>
          <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ quý khách hàng mọi lúc, mọi nơi.</p>
        </div>
      </div>

      <div className="map">
        <iframe title="Google Map" style={{ border: '0', width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0630144704187!2d106.68970209999999!3d10.806485799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c36724b571%3A0x75c3a5634ea5ddff!2zOTMvMTAgSG_DoG5nIEhvYSBUaMOhbSwgUGjGsOG7nW5nIDYsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1sen!2s!4v1691907298393!5m2!1sen!2s" frameBorder="0" allowFullScreen></iframe>
      </div>

      <div className="container mt-5">
        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>93/10 Hoàng Hoa Thám, Phường 6, Bình Thạnh<br /> Thành phố Hồ Chí Minh, Vietnam</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Saturday:<br />11:00 AM - 2300 PM</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com<br />contact@example.com</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
            </div>
          </div>
        </div>

        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
