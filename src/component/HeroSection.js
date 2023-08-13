import React from 'react';
function HeroSection() {
    return (
        <section id="hero">
            <div className="hero-container">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active" style={{ backgroundPosition: 'center', position: 'relative' }}>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2 className="animate__animated animate__fadeInDown"><span>Nước mắm Xuân </span>Thịnh Mậu</h2>
                                <p className="animate__animated animate__fadeInUp">Bảo tồn Truyền thống, Tinh hoa Sáng tạo - Nước mắm Xuân Thịnh Mậu: Di sản của Tình yêu, Hương vị, và Sự cống hiến. Gắn kết với bốn mùa, ngấm đượm trong tình thương mẫu tử, và ủ thành từ trái tim, nước mắm của chúng tôi gợi lên bản chất của sự tôn trọng, dinh dưỡng và truyền thống. Mỗi giọt phản ánh cam kết của chúng tôi với chất lượng, từ cá cơm tinh khiết đến quá trình ủ trong mười hai tháng. Nếm vị di sản, thưởng thức hành trình, và chia sẻ món quà.</p>
                                <div>
                                    <a href="#contact" className="btn-menu animate__animated animate__fadeInUp scrollto">Địa Chỉ Của Chúng Tôi</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default HeroSection;