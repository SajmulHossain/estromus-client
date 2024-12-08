import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextProvider/AuthProvider";
import googleIcon from "../assets/google.png";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, setUser, signinWithGoogle, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = ({email, password}) => {

    // const form = e.target;
    // const email = form.email.value;
    // const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged in successfully",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: err.code,
        });
      });
  };

  const handleSigninWithGoogle = () => {
    signinWithGoogle()
      .then((res) => {
        setUser(res.user);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged in successfully",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: err.code,
        });
      });
  };

  return (
    <section className="min-h-screen">
      <Helmet>
        <title>Login || Estromus</title>
      </Helmet>
      <div
        className="hero-content flex-col"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className={`input input-bordered ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className={`input input-bordered ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-1">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>

            <p className="text-sm">
              Already have an account?{" "}
              <Link
                to="/register"
                state={location?.state}
                className="italic font-semibold"
              >
                Register
              </Link>
            </p>
            <div className="divider">or</div>

            <button
              type="button"
              onClick={handleSigninWithGoogle}
              className="btn"
            >
              <img src={googleIcon} className="h-6 w-6" alt="google icon" />{" "}
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
