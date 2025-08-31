import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import useWindowSize from '../hooks/useWindowSize';
import MobileNav from './MobileNav';


const Navbar = () => {
  const navigate = useNavigate();
  const {isTabletandMobile} = useWindowSize()
  const navlinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about_us' },
    { name: 'Our services', path: '/services' },
    { name: "Careers", path: "/careers" },
    { name:"Faqs", path:"/faqs"}
  ]
  return (
    <nav className=" relative z-50">
      <div className=" w-full bg-transparent flex items-center justify-between px-4 py-2 lg:p-7 text-brand-colour-primary ">
        <Link to={'/'}>
          {' '}
          <img src={logo} alt="pure hearts logo" className=" h-20 w-48" />
        </Link>
        {isTabletandMobile ? <MobileNav Links={navlinks}/> : (
          <>
            <ul className=" flex items-center justify-center gap-x-5 font-medium text-xl ">
              {navlinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    className=" nav-link hover:text-black transition-all duration-500"
                  >
                    {' '}
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                )
              })}
            </ul>
            <button
              onClick={() => navigate('/contact')}
              className=" transition-all ease-in-out duration-700 hover:bg-brand-colour-primary hover:text-white border-2 border-brand-colour-primary px-4 py-2 rounded-2xl"
            >
              Contact us
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
