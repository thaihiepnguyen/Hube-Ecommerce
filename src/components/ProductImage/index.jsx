import styles from './styles.module.scss';
import cx from 'classnames';

const ProductImage = (props) => {
	const { image, myKey, onClick, active } = props
	
	return (
		<div className={active? styles.imageContainerActive : styles.imageContainer} onClick={() => onClick(myKey)}>
			<img className={styles.image} src={image} alt={image}/>
		</div>
	)
}

export default ProductImage