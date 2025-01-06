import { Outlet } from "react-router-dom"
import Footer from "./mainComponents/Footer"
import Header from "./mainComponents/Header"
import { useContext, useEffect } from "react";
import { AuthContext } from "./contextProvider/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import BackToTop from "./components/BackToTop";

function App() {

   const { loading } = useContext(AuthContext);

   useEffect(() => {
     Aos.init({
       duration: 500, 
       offset: 50, 
       easing: "ease",
       once: true, 
     });
   }, []);

   if (loading) {
     return (
       <div className="flex justify-center items-center h-screen">
         <span className="loading loading-bars loading-lg"></span>
       </div>
     );
   }

  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App
