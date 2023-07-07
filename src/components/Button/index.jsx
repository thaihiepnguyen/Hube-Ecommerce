import styles from './style.module.scss';
import cx from 'classnames';

const Button = props => {
  const { onClick, buttonClassName, borderColor, textColor, backgroundColor } =
    props;

  const { buttonContainer, buttonStyle } = styles;
  return (
    <div className={buttonContainer} onClick={onClick}>
      <button
        className={cx(buttonStyle, buttonClassName)}
        style={{
          borderColor: borderColor,
          color: textColor,
          backgroundColor: backgroundColor,
        }}
      >
        {props.children}
      </button>
    </div>
  );
};
export default Button;
