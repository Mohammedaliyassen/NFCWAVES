import Carousel from 'react-bootstrap/Carousel';
import imgS from '../imgs/Textlayer.png';
import imgS1 from '../imgs/ex1.png';
import imgS2 from '../imgs/ex2.png';
import imgS3 from '../imgs/ex3.png';
import './carousel.css';
function CarouselCard() {
  return (
    <Carousel className='carouselStyle mt-5' controls={false} indicatorLabels={['cool','hool','suee']}>
      <Carousel.Item>
        <img src= {imgS} alt='1st' />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= {imgS1} alt='1st' />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= {imgS2} alt='1st' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= {imgS3} alt='1st' />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCard;