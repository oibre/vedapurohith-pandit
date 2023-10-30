import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import styles from '../../global/styles'
import {useEffect, useState} from 'react'

const Sidebar = ({isSidebarOpen}: any) => {

  console.log(isSidebarOpen)

  const [shouldShowSidebar, setShouldShowSidebar] = useState(window.innerWidth > 1024);
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  useEffect(() => {
    const handleResize = () => {
      setShouldShowSidebar(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.sidebar} style={shouldShowSidebar ? {} : !isSidebarOpen ? {transform: 'translateY(-100vh)'} : {}}>
      <div className="p-4 hidden lg:flex mt-[30px] items-center bg-white rounded-lg w-full shadow-lg">
        <img src={logo} alt="Logo" className="w-[40px] h-auto rounded-[50%] mr-2" />
        <span className="font-playfair text-2xl font-bold">Vedapurohith</span>
      </div>
      <nav className="flex-1 flex flex-col overflow-auto no-wrap py-4 mt-auo mb-auto justify-start w-full">
        <Link to="/" className={"sidebar-item " + (currentPath === '' ? styles.activeSidebarItem : styles.sidebarItem)}>Home</Link>
        <Link to="/list-poojas" className={"sidebar-item " + (currentPath === 'list-poojas' ? styles.activeSidebarItem : styles.sidebarItem)}>List Poojas</Link>
        <Link to="/add-poojas" className={"sidebar-item " + (currentPath === 'add-poojas' ? styles.activeSidebarItem : styles.sidebarItem)}>Add Poojas</Link>
        <Link to="/edit-poojas" className={"sidebar-item " + (currentPath === 'edit-poojas' ? styles.activeSidebarItem : styles.sidebarItem)}>Edit Poojas</Link>
        <Link to="/view-bookings" className={"sidebar-item " + (currentPath === 'view-bookings' ? styles.activeSidebarItem : styles.sidebarItem)}>View Bookings</Link>
      </nav>
    </div>
  )
}

export default Sidebar