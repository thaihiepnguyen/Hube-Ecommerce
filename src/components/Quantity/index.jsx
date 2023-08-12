import styles from './styles.module.scss'
import cx from 'classnames'
import {useState} from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1)

  function onIncrease() {
    setQuantity(quantity + 1)
  }

  function onDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className={styles.quantityContainer}>
      <p>
        Số lượng
      </p>
      <div className={styles.quantityInput}>
        <button className={cx(styles.quantityInput__modifier, styles.quantityInput__modifierLeft)} onClick={onDecrease}>
          -
        </button>
        <input className={styles.quantityInput__screen} value={quantity} type="text" readOnly/>
        <button className={cx(styles.quantityInput__modifier, styles.quantityInput__modifierRight)} onClick={onIncrease}>
          +
        </button>
      </div>
    </div>
  )
}

export default Quantity