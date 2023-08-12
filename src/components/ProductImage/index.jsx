import styles from './styles.module.scss';

const ProductImage = (props) => {
	const { image, myKey, onClick, images } = props

	const onClickImage = (myKey) => {
		onClick(images[myKey])
	}
	
	return (
		<div className={styles.imageContainer} onClick={() => onClickImage(myKey)}>
			<img className={styles.image} src={image} alt={image}/>
		</div>
	)
}

export default ProductImage