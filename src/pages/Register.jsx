import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./auth.css";

const Register = () => {
  return (
        <div className="auth-page">
            <Header />
            <main className="auth-main">
                <section className="auth-card" aria-labelledby="register-heading">
                    <p className="auth-eyebrow">Start learning</p>
                    <h1 id="register-heading">Create your account</h1>
                    <p className="auth-intro">Join a focused community of developers learning by building.</p>
                    <form className="auth-form">
                        <div className="form-field">
                            <label htmlFor="register-username">Username</label>
                            <input type="text" id="register-username" name="username" autoComplete="username" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="register-email">Email address</label>
                            <input type="email" id="register-email" name="email" autoComplete="email" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="register-password">Password</label>
                            <input type="password" id="register-password" name="password" autoComplete="new-password" required />
                        </div>
                        <button className="auth-submit" type="submit">Create account</button>
                    </form>
                    <p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p>
                </section>
            </main>
        </div>
    );
};

export default Register;