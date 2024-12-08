import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";


const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Erro 404 || Estromus</title>
      </Helmet>
        <h1 className="text-4xl text-red-600 font-semibold mb-2">404 Not Found</h1>
      <div className="border p-4 rounded-lg">
        <div className="space-x-2">
          <Link className="btn bg-violet-700 text-white hover:text-black">Goto Home</Link>
          <button onClick={() => navigate(-1)} className="btn btn-outline">Go Back</button>
        </div>
      </div>
    </section>
  );
};

export default Error;