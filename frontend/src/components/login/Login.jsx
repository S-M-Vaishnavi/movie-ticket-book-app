import './Login.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log("Form Submitted", data);
	}
	return (
		<div>
			<div className="container">
				<div className="screen">
					<div className="screen__content">
						<form className="login" onSubmit={handleSubmit(onSubmit)} noValidate>
						<h1>Login</h1>

							<div className="login__field">
								<i className="login__icon fas fa-user"></i>
								<input type="email"
									className="login__input"
									placeholder="Email"
									{...register("email", {
										required: {
											value: true,
											message: "Email is required"
										},
										pattern: {
											value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
											message: "Invalid email format"
										}
									})} />
								{errors.email && <p className='error'>{errors.email.message}</p>}

							</div>
							<div className="login__field">
								<i className="login__icon fas fa-lock"></i>
								<input type="password"
									className="login__input"
									placeholder="Password"
									{...register("password", {
										required: {
											value: true,
											message: "Password is required"
										}
									})} />
								{errors.password && <p className='error'>{errors.password.message}</p>}

							</div>
							<button className="button login__submit">
								<span className="button__text">Log In Now</span>
								<i className="button__icon fas fa-chevron-right"></i>
							</button>
						</form>
						<div className="social-login">
							<div className="social-login">
								<Link to="/register">New User!<span className='social-login-span'>Register Here</span></Link>
							</div>
						</div>
					</div>
					<div className="screen__background">
						<span className="screen__background__shape screen__background__shape4"></span>
						<span className="screen__background__shape screen__background__shape3"></span>
						<span className="screen__background__shape screen__background__shape2"></span>
						<span className="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
