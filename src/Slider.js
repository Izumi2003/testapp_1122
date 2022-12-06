import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImg1 from './1.JPG';
import slideImg2 from './2.JPG';
import slideImg3 from './3.JPG';

const arr = [slideImg1, slideImg2, slideImg3];

function Slider() {
    return (<Carousel>
        {arr.map((item, index) => {
            return (<div key={index}>
                <img src={item} alt="" />
                <p className="legend">{index}</p>
            </div>)
        })}
    </Carousel>)
};
export default Slider;