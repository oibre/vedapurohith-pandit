import styles from "../../global/styles"
import logo from '../../assets/Logo_New.jpeg'

import {useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({setSidebarOpen}: any) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate()
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className="w-auto h-[70%] mr-auto rounded-[50%]" />
      {/* <span className="font-playfair text-xl font-bold mr-auto">Vedapurohith</span> */}
      <div onClick={() => {navigate("/notifications")}} className={`w-[50px] h-[50px] flex flex-col items-center justify-center p-[10px] ${location.pathname == "/notifications" ? "bg-black text-white" : "bg-gray-100 text-black"} rounded-lg cursor-pointer`}>
        <i className='bx bxs-bell text-xl rotate-[0deg]'></i>
      </div>
      <div onClick={toggleSidebar} className="w-[50px] h-[50px] ml-[10px] flex flex-col items-center justify-center p-[10px] bg-gray-100 rounded-lg cursor-pointer">
        <i className='bx bx-menu-alt-right text-2xl'></i>
      </div>
    </div>
  )
}

export default Navbar