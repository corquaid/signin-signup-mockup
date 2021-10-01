import { FieldErrors } from "react-hook-form";
import logo from '../logo.png'
import styles from "../styles/logo.module.css";

const Logo = ({ errors }: FieldErrors) => { // any type used here
    const errorClass: string = Object.keys(errors).length > 0 ? styles.logoShake : ""; // not sure if string is correct type here
    return (
        <div className={`${styles.logoContainer} ${errorClass}`}>
            <img className={styles.logo} alt="logo" src={logo} />
        </div>
    );
};

export default Logo;