import styles from './style.module.scss'
const Arrow = (props) => {
    const { children, direction, onBack, onNext } = props
    if (direction === "left") {
        return (
          <button className={styles.arrowContainerLeft} onClick={onBack}>
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