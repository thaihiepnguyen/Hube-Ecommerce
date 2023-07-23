import styles from './style.module.scss';
import ImageSlider1 from './../../../../assets/slider01.png';
import ImageSlider2 from './../../../../assets/slider02.png';
import ImageSlider3 from './../../../../assets/slider03.png';
import Carousel from 'react-multi-carousel';
import {
  CustomLeftArrow,
  CustomRightArrow,
  CustomDot,
} from '../../../../components/Arrow';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      infinite={true}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      customDot={<CustomDot />}
      className={styles.styledCarousel}
      autoPlay={true}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      }}
    >
      <div>
        <img src={ImageSlider1} className={styles.styledImage} alt='slider01' />
      </div>
      <div>
        <img src={ImageSlider2} className={styles.styledImage} alt='slider02' />
      </div>
      <div>
        <img src={ImageSlider3} className={styles.styledImage} alt='slider03' />
      </div>
    </Carousel>
  );
};

export default Slider;
