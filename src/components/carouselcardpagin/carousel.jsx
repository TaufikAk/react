import Slider from "react-slick";
import { useState } from "react";
import Caro1 from "../asset/img/caro1.jpg"
import Caro2 from "../asset/img/caro2.jpeg"
import Caro3 from "../asset/img/caro3.jpg"

const Carousel = () => {

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                    <img src={Caro1} className="d-block w-100 " alt="foto" />
                    </div>
                    <div>
                    <img src={Caro2} className="d-block w-100 " alt="foto" />
                    </div>
                    <div>
                    <img src={Caro3} className="d-block w-100 " alt="foto" />
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default Carousel;