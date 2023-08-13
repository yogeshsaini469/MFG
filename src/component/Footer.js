import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
      <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid" style={{maxWidth:'100px'}}/></a>
        <p>Tạo Hương Vị Di Sản - MFG: Nuôi Dưỡng Truyền Thống, Nâng Tầm Hương Vị.</p>
        <div className="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>MFG</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          
          Designed by <a href="#">Bharat Groups</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
