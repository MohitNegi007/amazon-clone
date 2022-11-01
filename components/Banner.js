import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        interval={5000}
        showThumbs={false}
      >
        <div>
          <img loading="lazy" src="/images/bannerImage1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/bannerImage2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/bannerImage3.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
