import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/bgimg.jpeg"
import img2 from "../assets/bgimg2.jpeg"
import img3 from "../assets/bgimg3.jpg"
import img4 from "../assets/bgimg4.jpg"
import "./Slider.css"
const SliderComponent = () => {
  const settings = {
    dots: true,               // Show navigation dots
    infinite: true,           // Infinite scrolling
    slidesToShow: 3,          // Default: Show 3 slides on large screens
    slidesToScroll: 1,        // Scroll 1 slide at a time
    autoplay: true,           // Auto sliding
    autoplaySpeed: 1000,      // Time per slide (3s)
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "90%", margin: "0 auto", marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }} className="Slider_heading">Category</h1>
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Slide 1"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Slide 2"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Slide 3"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Slide 4"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        {/* <div>
          <img
            src={}
            alt="Slide 5"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default SliderComponent;
