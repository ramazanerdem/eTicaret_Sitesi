import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const AppLayout = ({ children }) => {
  return (
    <div className="w-10/12 mx-auto  min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}
export default AppLayout
