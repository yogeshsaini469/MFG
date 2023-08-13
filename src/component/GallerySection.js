import React, { useState } from 'react'; // Import useState

const GallerySection = () => {
  const [showAllImages, setShowAllImages] = useState(false); // State to track whether to show all images or not
  const initialImageCount = 8; // Number of images to show initially
  const totalImages = 18; // Total number of images

  // Calculate the number of images to display based on whether "Show More" is clicked
  const imageCountToShow = showAllImages ? totalImages : initialImageCount;

  return (
    <section id="gallery" className="gallery">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Khám phá Bộ sưu tập  <span>của chúng tôi</span></h2>
          <p>Đắm chìm trong thế giới của MFG qua những bức ảnh cuốn hút, mang đến cho bạn cái nhìn sơ lược về di sản phong phú và sự khéo léo tuyệt vời của chúng tôi.</p>
        </div>
        <div className="gallery-grid">
          {[...Array(imageCountToShow)].map((_, index) => ( // Map over the specified number of images
            <div key={index} className="gallery-item">
              <a href={`assets/img/gallery/gallery-${index + 1}.jpg`} className="gallery-lightbox">
                <img src={`assets/img/gallery/gallery-${index + 1}.jpg`} alt="" className="img-fluid" />
              </a>
            </div>
          ))}
        </div>
        {!showAllImages && imageCountToShow < totalImages && ( // Show the "Show More" button conditionally
          <div className="text-center mt-3 mb-5">
            <button className="book-a-table-btn" onClick={() => setShowAllImages(true)}>Show More</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
