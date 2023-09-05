import styles from './styles.module.scss'

const PriceConverter = (props) => {
  const format = `${props.children}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return (
    <>
      <div className={styles.price}>
        {format} đ
      </div>
    </>
  )
}

export default PriceConverter;