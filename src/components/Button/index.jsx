import styles from './style.module.scss'

const Button = (props) => {
    const { buttonContainer, buttonStyle } = styles
    return (
        <div className={buttonContainer}>
            <button className={buttonStyle} style={
                {
                    borderColor: props.borderColor,
                    color: props.textColor,
                    backgroundColor: props.backgroundColor
                }
            }>{props.children}</button>
        </div>
    )
}
export default Button