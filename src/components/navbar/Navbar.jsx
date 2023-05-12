import NavbarLeft from './navbaritems/NavbarLeft'
import NavbarRight from './navbaritems/NavbarRight'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-yellow-300 bg-opacity-50">
      <NavbarLeft />
      <NavbarRight />
    </div>
  )
}
export default Navbar
