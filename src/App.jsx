import { Outlet } from "react-router-dom"
import Footer from "./mainComponents/Footer"
import Header from "./mainComponents/Header"
import { useContext } from "react";
import { AuthContext } from "./contextProvider/AuthProvider";

function App() {

   const { loading } = useContext(AuthContext);

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
     <main className="max-w-screen-xl mx-auto px-4">
      <Outlet />
     </main>
     <Footer />
    </>
  )
}

export default App
