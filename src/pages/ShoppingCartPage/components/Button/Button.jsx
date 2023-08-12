import styles from './styles.module.scss';
import cx from 'classnames';

const Button = props => {
  const {
    onClick,
    className,
    buttonClassName,
    borderColor,
    textColor,
    backgroundColor,
  } = props;

  const { buttonContainer, buttonStyle } = styles;

  return (
    // <div className={cx(buttonContainer, className)} onClick={onClick}>
      <button
        type="submit"
        formAction="localhost:3001/sign-up"
        className={cx(buttonStyle, buttonClassName)}
        style={{
          borderColor: borderColor,
          color: textColor,
          backgroundColor: backgroundColor,
        }}
      >
        {props.children}
      </button>
    // </div>
  );
};
export default Button;
