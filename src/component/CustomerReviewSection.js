import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomerReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Mai L',
      role: 'Absolutely delicious! Xuan Thinh Mau Fish Sauce has transformed my dishes with its rich flavor. A true taste of tradition.',
      image: 'assets/img/customers/customer-1.jpg',
      stars: 5,
    },
    {
      id: 2,
      name: 'Nguyễn T',
      role: 'Tôi đã sử dụng Nước Mắm Xuân Thịnh Mậu trong nhiều năm. Nó thêm phần đích thực Việt vào tất cả các bữa ăn của tôi. Rất đáng giới thiệu!',
      image: 'assets/img/customers/customer-2.jpg',
      stars: 4,
    },
    {
      id: 5,
      name: 'Minh H',
      role: 'Một viên ngọc bị ẩn! Độ sâu của hương vị trong Nước Mắm Xuân Thịnh Mậu không thể so sánh. Nó nâng cao mọi món tôi nấu. Một điều phải có trong mọi nhà bếp.',
      image: 'assets/img/customers/customer-3.jpg',
      stars: 4,
    },
    {
      id: 4,
      name: 'Linh P',
      role: 'Nước Mắm Xuân Thịnh Mậu thể hiện bản sắc của truyền thống và chất lượng. Món ưa thích của gia đình tôi qua các thế hệ. Một phụ gia kể câu chuyện.',
      image: 'assets/img/customers/customer-4.jpg',
      stars: 5,
    },
    {
      id: 5,
      name: 'Quang D',
      role: 'Là người yêu hải sản, tôi đánh giá cao tính chất chân thực của Nước Mắm Xuân Thịnh Mậu. Nó kết hợp hoàn hảo với hải sản và thể hiện di sản ẩm thực Việt.',
      image: 'assets/img/customers/customer-5.jpg',
      stars: 4,
    },
    {
      id: 6,
      name: 'Anh N',
      role: 'Tôi nhận được Nước Mắm Xuân Thịnh Mậu như một món quà và nó đã trở thành một phần quan trọng trong việc nấu ăn của tôi. Hương vị độc đáo thêm chiều sâu cho món ăn của tôi.',
      image: 'assets/img/customers/customer-0.jpg',
      stars: 5,
    },
    // Add more reviews as needed
  ];

 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true, // Center align items
    centerPadding: '0', // Remove padding for centering
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Display 1 item at a time on mobile
        },
      },
      {
        breakpoint: 992, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Display 2 items at a time on tablet
        },
      },
    ],
  };
  return (
    <section id="chefs" className="chefs">
      <div className="container">
        <div className="section-title">
          <h2>Nhận Xét  <span>Khách Hàng</span></h2>
          <p>Khách hàng của chúng tôi chia sẻ những trải nghiệm thú vị và hài lòng với Nước Mắm Xuân Thịnh Mậu.</p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="chefs-slider">
              <Slider {...sliderSettings}>
                {reviews.map(review => (
                  <div key={review.id} className="chef-item p-3 p-sm-1 text-center mx-auto">
                    <div className="pic">
                      <img
                        src={review.image}
                        className="img-fluid mx-auto mx-auto"
                        alt=""
                      />
                    </div>
                    <div className="member-info mt-3">
                      <h4>{review.name}</h4>

                      <div className="stars">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <i key={index} className={`bi bi-star${index < review.stars ? '-fill' : ''}`}></i>
                        ))}
                      </div>
                      <span>{review.role}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
