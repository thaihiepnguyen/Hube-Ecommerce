import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styles from './style.module.scss';
const Arrow = props => {
  const { children, direction, onPrevious, onNext } = props;
  if (direction === 'left') {
    return (
      <button className={styles.arrowContainerLeft} onClick={onPrevious}>
        {children}
      </button>
    );
  }
  if (direction === 'right') {
    return (
      <button className={styles.arrowContainerRight} onClick={onNext}>
        {children}
      </button>
    );
  }
  return <div></div>;
};

export const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Arrow direction='right' onNext={() => onClick()}>
      <ArrowRightOutlined />
    </Arrow>
  );
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Arrow direction='left' onPrevious={() => onClick()}>
      <ArrowLeftOutlined />
    </Arrow>
  );
};

export const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      className={active ? styles.activeDot : styles.isActiveDot}
      onClick={() => onClick()}
    ></button>
  );
};

export default Arrow;
