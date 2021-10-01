import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Logo from "../components/logo";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styles from "../styles/signin-signup.module.css";

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        reset,
        setFocus,
    } = useForm();

    // Mocking a successful login
    const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            clearErrors();
        }, 2000);
        setTimeout(() => {
            alert("Sign in successful!");
        }, 2000);
        setFocus("email");
        reset();
    };

    return (
            <div className={styles.contentContainer}>
                <Logo errors={errors} />
                <h1>Sign in</h1>
                <ErrorMessage
                    errors={errors}
                    name="email"
                    data-testid="errorMessage"
                    render={({ message }) => <p className={styles.errorMessage}>{message}</p>}
                />
                <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => <p className={styles.errorMessage}>{message}</p>}
                />
                <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            className={styles.input}
                            type="email"
                            autoFocus
                            aria-label="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input
                            className={styles.input}
                            type="password"
                            data-testid="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                    </div>
                    <Button buttonName="Sign in" buttonLoading="Signing in..." loading={loading} data-testid="button" />
                </form>
                <div className={styles.navMessageContainer}>
                    <p className={styles.p}>Not a member yet?</p>
                    <Link className={styles.p} to="/signup">
                        Click here to create a new account.
                    </Link>
                </div>
            </div>
    );
};

export default SignIn;
