import Slider from "react-slick";

function CategoryCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-5" id="categories">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Categories</h2>
          <a href="#">View All →</a>
        </div>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="p-2 text-center">
              <img
                src={`https://picsum.photos/260/160?random=${num}`}
                className="rounded w-100"
                alt={`Category ${num}`}
              />
              <h6 className="mt-2">Category {num}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CategoryCarousel;

