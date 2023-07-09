import styles from './style.module.scss'
import Arrow from "../../../../components/Arrow";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import {useEffect, useState} from "react";
import Slide from "../../../../components/Slide";
const Slider = () => {
  const [imageIndex, setImageIndex] = useState(1);
  function nextImage() {
    if (imageIndex < 3) {
      setImageIndex(imageIndex + 1)
    } else {
      setImageIndex(1)
    }
  }
  function previousImage() {
    if (imageIndex > 1) {
      setImageIndex(imageIndex - 1)
    } else {
      setImageIndex(3)
    }
  }

  return (
    <div className={styles.sliderContainer}>
      <Arrow direction="left" onPrevious={previousImage}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Slide imageIndex={imageIndex}/>
      <Arrow direction="right" onNext={nextImage}>
        <ArrowRightOutlined/>
      </Arrow>
    </div>
  )
}
export default Slider;