import styles from "../styles/button.module.css";

interface ButtonProps {
    buttonName: string,
    buttonLoading: string,
    loading: boolean
}
const Button = ({ buttonName, buttonLoading, loading }: ButtonProps) => {
    const signinClass = loading ? styles.buttonSignIn : "";
    return (
        <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${signinClass}`} formNoValidate>
                {
                    loading ? buttonLoading : buttonName
                }
            </button>
        </div>
    );
};

export default Button;
