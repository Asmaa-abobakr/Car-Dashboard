import './main.scss';
import { Outlet } from 'react-router-dom';
import { Nav } from '../../components/shared/navbar/Nav';
import { Sidebar } from '../../components/shared/sidebar/Sidebar';


export const Main = () => {
  return (
    <>
    <div className='container-fluid main-container'>
      <div className='row'>
          <div className="col-2 col-lg-2 col-sm-1 px-0">
            <Sidebar/>
          </div>
          
          <div className="col-10 col-lg-10 col-sm-11 px-0">
            <Nav/>
            <Outlet className="w-100" />
          </div>
      </div>
    </div>
    </>
  )
}
