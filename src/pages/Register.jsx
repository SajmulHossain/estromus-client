import { useContext, useState } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const {createUser, setUser} = useContext(AuthContext);
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

    createUser(email, password)
    .then(res => {
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
    .catch(error => {
      console.log(error.code);
    })
  };
  return (
    <section className="min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        {
          error && <p className="text-red-600">{error}</p>
        }
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body p-8">
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
              <Link to="/login" state={location?.state} className="italic font-semibold">
                Login
              </Link>
            </p>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Register;