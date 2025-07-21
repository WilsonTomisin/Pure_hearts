import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'


const Navbar = () => {
  return (
    <div className=" flex items-center justify-between p-7 text-brand-colour-primary ">
      <img src={logo} alt="pure hearts logo" className=' h-20 w-48' />
      <ul className=' flex items-center justify-center gap-x-5 font-medium text-xl '>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          {' '}
          <Link to={'/about_us'}>About us</Link>
        </li>
        <li>
          {' '}
          <Link to={'/services'}>Our services</Link>
        </li>
        <li>
          {' '}
          <Link to={'/careers'}>careers</Link>
        </li>
        <li>
          {' '}
          <Link to={'/faqs'}>faqs</Link>
        </li>
      </ul>
      <button className=' border-2 border-brand-colour-primary px-4 py-2 rounded-2xl'>Contact us</button>
    </div>
  )
}

export default Navbar
