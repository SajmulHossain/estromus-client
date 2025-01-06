import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import errorImg from '../assets/error.png'


const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen section flex flex-col justify-center items-center">
      <Helmet>
        <title>Erro 404 || Estromus</title>
      </Helmet>
        
        <div className="border p-4 rounded-md">
          <div>
            <img src={errorImg} className="w-full h-96 object-cover" alt="error images" />
          </div>
          <div className="join">
            <button onClick={() => navigate(-1)} className="btn w-full join-item btn-primary text-white">Go Back</button>
            <button onClick={() => navigate('/')} className="btn w-full join-item btn-success text-white">Go Home</button>
          </div>
        </div>
    </section>
  );
};

export default Error;