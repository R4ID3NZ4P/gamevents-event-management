import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    
    const { user, loading, login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        login(email, password)
            .then(() => {
                toast("Successfully logged in!");
                navigate("/");
            })
            .catch(error => {
                if(error.code === "auth/invalid-login-credentials") toast("Invalid email or password!");
            });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast("Successfully logged in!");
                navigate("/");
            });
    }
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                        <h3 className="text-center my-2 text-sm">Or</h3>
                        <a className="btn btn-neutral" onClick={handleGoogleLogin}>Login with Google</a>
                        <p className="text-xs">Don't have an account? <Link to={"/register"} className="text-red-500">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
