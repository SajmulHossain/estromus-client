import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";


const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleButtonShow = () => {
    if(window.scrollY > 300) {
      setVisible(true)
    } else {
      setVisible(false);
    }
  }
  const handleUp = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleButtonShow)
    return () => window.removeEventListener('scroll', handleButtonShow)
  },[])
  return (
    <button onClick={handleUp} className={`fixed ${visible ? 'block' : 'hidden'} hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-500 bottom-4 right-4 bg-violet-800 rounded-full z-50`}>
      <BiUpArrowAlt className="text-white" size={40} />
    </button>
  );
};

export default BackToTop;