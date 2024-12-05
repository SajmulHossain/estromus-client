import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contextProvider/AuthProvider";
import googleIcon from '../assets/google.png'


const Login = () => {
  const { loginUser, setUser, signinWithGoogle } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   loginUser(email, password)
   .then(res => {
    setUser(res.user);
   })
   .catch(err => {
    console.log(err.code);
   })


   

  }


  const handleSigninWithGoogle = () => {
    signinWithGoogle()
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };


  return (
    <section className="min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body p-8">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-1">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            
            <p className="text-sm">Already have an account? <Link to='/register' className="italic font-semibold">Register</Link></p>
          <div className="divider">or</div>

          <button type="button" onClick={handleSigninWithGoogle} className="btn"><img src={googleIcon} className="h-6 w-6" alt="google icon" /> Continue with Google</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Login;