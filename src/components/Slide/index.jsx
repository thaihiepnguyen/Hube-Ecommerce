import styles from './style.module.scss'
import ImageSlider1 from '../../assets/slider01.png'
import ImageSlider2 from '../../assets/slider02.png'
import ImageSlider3 from '../../assets/slider03.png'
import cx from 'classnames';
const Slide = (props) => {
  const { imageIndex } = props

  if (imageIndex === 1) {
    return <img src={ImageSlider1} className={cx(styles.styledImage, styles.styledImageFadeIn)} alt="slider01"/>
  }
  if (imageIndex === 2) {
    return <img src={ImageSlider2} className={cx(styles.styledImage, styles.styledImageFadeIn)} alt="slider02"/>
  }
  if (imageIndex === 3) {
    return <img src={ImageSlider3} className={cx(styles.styledImage, styles.styledImageFadeIn)} alt="slider03"/>
  }
}

export default Slide