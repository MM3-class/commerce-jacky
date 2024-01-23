import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

const VerticalSlider = ({children, className}) => {
        // Custom Arrow Slick Slider
        const NextArrow = ({ onClick, className, style }) => {
            return (
                <div className={className} onClick={onClick} style={{ top: "-70px", right: 0, position: "absolute", }}>
                    <ArrowRight style={{
                        ...style,
                        display: "block", background: "#f5f5f5", borderRadius: "50%", padding: "2px", width: "24px", height: "24px", color: "#000"
                    }} />
                </div>
            )
        }
        const PrevArrow = ({ onClick, className, style }) => {
            return (
                <div className={className} onClick={onClick} style={{
                    ...style,
                    top: "-70px", left: "92%", position: "absolute",
                }}>
                    <ArrowLeft size={10} style={{
                        ...style,
                        display: "block", background: "#f5f5f5", borderRadius: "50%", padding: "2px", width: "24px", height: "24px", color: "#000"
                    }} />
                </div>
            )
        }
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1520,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1424,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1020,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        };
  return (
    <Slider className={className}  {...settings} >
        {children}
    </Slider>
  )
}

export default VerticalSlider