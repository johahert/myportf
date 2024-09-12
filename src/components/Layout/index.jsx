import './index.scss'
import { Outlet } from 'react-router-dom'
import bghue from '../../assets/bghuey.svg'
const Layout = ({themeColor}) =>{
    return (
        <div className="layout bg-gradient-to-br from-teal-700 to-teal-950">

            {/* <div className='absolute   inset-0 box-border'>
                <img src={bghue} className='block w-full h-36 object-center object-cover' alt="" />
            </div> */}
            
            <Outlet />
            
        </div>
    )
}
export default Layout