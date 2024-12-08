import { useContext, useState } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import googleIcon from '../assets/google.png'
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, setUser, updateUser, setLoading, signinWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    setError('');

    const regexUppercase = /[A-Z]/;
    const regexLowercase = /[a-z]/;

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      setError("Password should be atleast 6 characters or more.");
      return;
    }

     if (!regexUppercase.test(password)) {
       setError("Password must contain atleast a uppercase letter");
       return;
     }

      if (!regexLowercase.test(password)) {
        setError("Password must contain atleast a lowercase letter");
        return;
      }

      const userData = {
        displayName: name,
        photoURL: photo,
      }

    createUser(email, password)
    .then(res => {
      setUser(res.user);
      updateUser(userData)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        form.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Registration successfull",
        });
        
      }).catch(err => {
        setLoading(false);
        Swal.fire({
          title: "Error!",
          text: err.code,
          icon: "error",
        });
      })
      

    })
    .catch(error => {
      setLoading(false);
      Swal.fire({
        title: "Error!",
        text: error.code,
        icon: "error",
      });
    })
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
          title: "Registration successfull",
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
        <title>Register || Astromus</title>
      </Helmet>
      <div
        className="hero-content flex-col"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
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
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
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
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-primary">Register</button>
            </div>

            <p className="text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                state={location?.state}
                className="italic font-semibold"
              >
                Login
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

export default Register;