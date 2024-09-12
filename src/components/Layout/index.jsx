import './index.scss'
import { Outlet } from 'react-router-dom'
import bghue from '../../assets/bghuey.svg'
const Layout = ({themeColor}) =>{
    return (
        <div className="layout bg-gradient-to-b from-gray-200 to-gray-400">

            {/* <div className='absolute   inset-0 box-border'>
                <img src={bghue} className='block w-full h-36 object-center object-cover' alt="" />
            </div> */}
            
            <Outlet />
            
        </div>
    )
}
export default Layout