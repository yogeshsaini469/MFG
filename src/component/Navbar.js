import React, { useEffect, useState } from 'react';

const MobileNavToggle = ({ onClick, isOpen }) => (
  <i className={`me-3 bi ${isOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={onClick}></i>
);

const Navbar = () => {
  useEffect(() => {
    const scrollHandler = () => {
      const position = window.scrollY + 200;
      const navbarlinks = document.querySelectorAll('#navbar .scrollto');
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        const section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });

      const header = document.getElementById('header');
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };

    const mobileNavToggleClickHandler = () => {
      const navbar = document.querySelector('#navbar');
      navbar.classList.toggle('navbar-mobile');
      const navbarToggle = document.querySelector('.mobile-nav-toggle');
      navbarToggle.classList.toggle('bi-list');
      navbarToggle.classList.toggle('bi-x');
    };

    window.addEventListener('scroll', scrollHandler);
    document.querySelector('.mobile-nav-toggle').addEventListener('click', mobileNavToggleClickHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      document.querySelector('.mobile-nav-toggle').removeEventListener('click', mobileNavToggleClickHandler);
    };
  }, []);

  return (
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Trang Chủ</a></li>
        <li><a className="nav-link scrollto" href="#our-story">Chuyện Của Chúng Tôi</a></li>
        <li><a className="nav-link scrollto" href="#why-us">Tại sao chúng tôi</a></li>
        <li><a className="nav-link scrollto" href="#gallery">Hình ảnh</a></li>
        <li><a className="nav-link scrollto" href="#contact">Liên Hệ</a></li>
      </ul>
      <MobileNavToggle />
    </nav>
  );
};

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <div className="logo me-auto">
        <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
