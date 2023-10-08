import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        const uppercaseError = /(?=.*[A-Z])/;
        const specialCharacterError = /(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
        const minLengthError = /^.{1,5}$/;
        
        if (minLengthError.test(password)) {
            toast("Password must be at least 6 characters long.");
        }

        else if (!uppercaseError.test(password)) {
            toast("Password must contain at least one uppercase letter.");
        }

        else if (!specialCharacterError.test(password)) {
            toast("Password must contain at least one special character.");
        }


        else register(email, password)
            .then(() => {
                toast("User successfully registered!");
                updateProfile(auth.currentUser, {
                    displayName: name
                  });
                navigate("/");
            })
            .catch((error) => {
                if(error.code === "auth/email-already-in-use") toast("User already exists!");
            });
        console.log(email, password);
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">
                                Register
                            </button>
                        </div>
                        <p className="text-xs">
                            Already have an account?{" "}
                            <Link to={"/login"} className="text-red-500">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;