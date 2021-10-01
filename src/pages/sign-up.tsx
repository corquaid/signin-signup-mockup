import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Logo from "../components/logo";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import styles from "../styles/signin-signup.module.css";

const SignUp = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setFocus,
        watch,
    } = useForm({ criteriaMode: "all" });

    const password = useRef();
    password.current = watch("password", "");

    const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Sign in successful!");
        }, 2000);
        setFocus("email");
        reset();
    };

    return (
        <div className={styles.contentContainer}>
            <Logo errors={errors} />
            <h1>Sign up</h1>
            <ErrorMessage
                errors={errors}
                name="email"
                render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                        <p className={styles.errorMessage} key={type}>
                            {message}
                        </p>
                    ))
                }
            />
            <ErrorMessage
                errors={errors}
                name="name"
                render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                        <p className={styles.errorMessage} key={type}>
                            {message}
                        </p>
                    ))
                }
            />
            <ErrorMessage
                errors={errors}
                name="password"
                render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                        <p className={styles.errorMessage} key={type}>
                            {message}
                        </p>
                    ))
                }
            />
            <ErrorMessage
                errors={errors}
                name="confirm"
                render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                        <p className={styles.errorMessage} key={type}>
                            {message}
                        </p>
                    ))
                }
            />
            <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        type="email"
                        autoFocus
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
                    <label className={styles.label}>Full name</label>
                    <input
                        className={styles.input}
                        type="name"
                        {...register("name", {
                            required: "Full name is required",
                            pattern: {
                                value: /(\w.+\s).+/i,
                                message: "Missing last name",
                            },
                        })}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password is too short",
                            },
                        })}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Confirm password</label>
                    <input
                        className={styles.input}
                        type="password"
                        {...register("confirm", {
                            required: "Please confirm your password",
                            validate: value => value === password.current || "The passwords don't match",
                        })}
                    />
                </div>
                <Button buttonName="Sign up" buttonLoading="Signing up..." loading={loading} />
            </form>
            <div className={styles.navMessageContainer}>
                <p className={styles.p}>Already using our app?</p>
                <Link className={styles.p} to="/signin">
                    Click here to sign in.
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
