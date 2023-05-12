import Slider from 'react-slick'

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex justify-center items-center gap-9 bg-black bg-opacity-5 p-10 paginate">
          <div>
            <p className="font-bold text-4xl">Sadece Koşuna Odaklan</p>
            <p className="text-lg my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit earum magnam eaque eius quibusdam, repellat officiis
              quis! Aliquid, omnis debitis placeat ad quo veniam vitae.
            </p>
            <button className="text-lg font-semibold bg-black bg-opacity-10 rounded-full px-9 py-2">
              İncele
            </button>
          </div>
          <img
            className="w-1/3 shadow-xl"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/389365/02/sv01/fnd/TUR/w/1000/h/1000/fmt/png"
            alt=""
          />
        </div>
        <div className="!flex justify-center items-center gap-9 bg-black bg-opacity-5 p-10">
          <div>
            <p className="font-bold text-4xl">Seninle Tam Uyumlu!</p>
            <p className="text-lg my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit earum magnam eaque eius quibusdam, repellat officiis
              quis! Aliquid, omnis debitis placeat ad quo veniam vitae.
            </p>
            <button className="text-lg font-semibold bg-black bg-opacity-10 rounded-full px-9 py-2">
              İncele
            </button>
          </div>
          <img
            className="w-1/3 shadow-xl"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/391171/03/sv01/fnd/TUR/w/2000/h/2000/fmt/png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  )
}
export default SliderComp
