import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const {createUser, setUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(res => {
      setUser(res.user);
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
              <Link to="/login" className="italic font-semibold">
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