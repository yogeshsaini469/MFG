import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Cụ Trụ Vũ',
      position: 'Founder',
      content: 'Cụ Trụ Vũ, 92 tuổi, là nhà thơ và người viết Thư pháp, với sự hiểu biết sâu về cuộc sống, giáo lý Phật giáo và nghệ thuật Thư pháp. Ông gắn bó với những danh nhân như cụ Trần Văn Khê và Thiền sư Zen Thích Nhất Hạnh. Ông cũng là nguồn cảm hứng cho bài thơ theo phong cách Khoán thủ, tôn vinh tên của họ. Ông đặt tên nước mắm là "Xuân Thịnh Mậu" bằng chữ Thư pháp đẹp mắt và thường tặng bài thơ mới mỗi lần thăm, thể hiện tình cảm với quê hương. Cụ Trụ Vũ là hình mẫu đầy cảm hứng và hỗ trợ tinh thần trong sản xuất nước mắm Xuân Thịnh Mậu.',
      image: 'assets/img/gallery-1.jpg',
    },
    // Add more reviews as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container position-relative">
        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <Slider {...settings}>
            {reviews.map(review => (
              <div key={review.id} className="swiper-slide">
                <div className="testimonial-item">
                  <img src={review.image} className="testimonial-img" alt="" />
                  <h3>{review.name}</h3>
                  <h4>{review.position}</h4>
                  
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {review.content}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
