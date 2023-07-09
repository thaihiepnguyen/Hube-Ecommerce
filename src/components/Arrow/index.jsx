import styles from './style.module.scss'
const Arrow = (props) => {
    const { children, direction, onPrevious, onNext } = props
    if (direction === "left") {
        return (
          <button className={styles.arrowContainerLeft} onClick={onPrevious}>
              {children}
          </button>
        )
    }
    if (direction === "right") {
        return (
          <button className={styles.arrowContainerRight} onClick={onNext}>
              {children}
          </button>
        )
    }
    return <div></div>
}

export default Arrow