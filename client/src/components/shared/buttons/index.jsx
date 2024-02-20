import styles from "./Button.module.css"

const Button = ({variant, children, width }) => {
    return (
        <button data-variant={variant} style={{width: width}} className={styles.btn}>
            {children}
        </button>
    )
}

export default Button