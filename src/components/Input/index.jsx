import styles from './styles.module.scss';
import cx from 'classnames';

const CustomInput = props => {
  const { label, inputClassName, required, type, placeholder } = props;
  return (
    <div className={styles.container}>
      <label className={cx({ [styles.required]: required })}>{label}</label>
      <input
        className={cx(styles.input, inputClassName)}
        required={required}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
