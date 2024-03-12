import styles from "../../global/styles"
import logo from '../../assets/logo.png'
import {Link, useLocation} from 'react-router-dom'

const BottomNavbar = () => {
  
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  return (
    <div className={styles.bottomNavbar}>
      <Link to={'/'} className={"flex-1 " + (currentPath === '' ? styles.activeBottomNavItem : styles.bottomNavItem)}>
        <i className='bx bxs-home-alt-2 text-lg'></i>
        <p className="font-playfair text-xs">Home</p>
      </Link>
      <Link to={'/add-poojas'} className={"flex-1 " + (currentPath === 'add-poojas' ? styles.activeBottomNavItem : styles.bottomNavItem)}>
        <i className='bx bx-plus-medical text-lg'></i>
        <p className="font-playfair text-xs">Add</p>
      </Link>
      <Link to={'/list-poojas'} className={"flex-1 " + (currentPath === 'list-poojas' ? styles.activeBottomNavItem : styles.bottomNavItem)}>
        <i className='bx bx-list-ol text-2xl mb-[-6px]'></i>
        <p className="font-playfair text-xs">List</p>
      </Link>
      <Link to={'/view-bookings'} className={"flex-1 " + (currentPath === 'view-bookings' ? styles.activeBottomNavItem : styles.bottomNavItem)}>
        <i className='bx bxs-cart-alt text-lg'></i>
        <p className="font-playfair text-xs">Bookings</p>
      </Link>
    </div>
  )
}

export default BottomNavbar
