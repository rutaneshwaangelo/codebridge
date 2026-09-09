import Header from "../components/Header";
import "./auth.css";

const Login = () => {
	return (
		<div className="auth-page">
			<Header />
			<main className="auth-main">
				<section className="auth-card" aria-labelledby="login-heading">
					<p className="auth-eyebrow">Welcome back</p>
					<h1 id="login-heading">Log in to CodeBridge</h1>
					<p className="auth-intro">Continue building the skills that move you forward.</p>
					<form className="auth-form">
						<div className="form-field">
							<label htmlFor="login-email">Email address</label>
							<input type="email" id="login-email" name="email" autoComplete="email" required />
						</div>
						<div className="form-field">
							<label htmlFor="login-password">Password</label>
							<input type="password" id="login-password" name="password" autoComplete="current-password" required />
						</div>
						<button className="auth-submit" type="submit">Log in</button>
					</form>
					<p className="auth-switch">New to CodeBridge? <a href="/register">Create an account</a></p>
				</section>
			</main>
		</div>
	);
};

export default Login;
