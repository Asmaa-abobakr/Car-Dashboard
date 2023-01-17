import './sidebar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { BsGrid } from "react-icons/bs";
import logoImg from "./../../../assets/images/sidebar/logo.png";
import dashboardIcon from "./../../../assets/images/sidebar/dashboard-icon.svg";
import assetsIcon from "./../../../assets/images/sidebar/assets-icon.svg";
import carIcon from "./../../../assets/images/sidebar/car-icon.svg";
import sellIcon from "./../../../assets/images/sidebar/sell-icon.svg";
import shoppingIcon from "./../../../assets/images/sidebar/shopping-icon.svg";
import serviceIcon from "./../../../assets/images/sidebar/service-icon.svg";
import calenderIcon from "./../../../assets/images/sidebar/calender-icon.svg";
import messageIcon from "./../../../assets/images/sidebar/messages-icon.svg";
import settingIcon from "./../../../assets/images/sidebar/setting-icon.svg";
import signoutIcon from "./../../../assets/images/sidebar/signout-icon.svg";


export const Sidebar = () => {
  let [activeItem, setActiveItem] = useState(0);
  const listItems = [
		{
			path: '/',
			name: 'Dashboard',
			icon: dashboardIcon,
		},
		{
			path: '/',
			name: 'Assets',
			icon: assetsIcon,
		},
		{
			path: '/booking',
			name: 'Booking',
			icon: carIcon,
		},
		{
			path: '/sell',
			name: 'Sell Cars',
			icon: sellIcon,
		},
		{
			path: '/',
			name: 'Buy Cars',
			icon: shoppingIcon,
		},
    {
			path: '/',
			name: 'Services',
			icon: serviceIcon,
		},
    {
			path: '/',
			name: 'Calender',
			icon: calenderIcon,
		},
    {
			path: '/',
			name: 'Messages',
			icon: messageIcon,
		},
    {
			path: '/',
			name: 'Settings',
			icon: settingIcon,
		},
    {
			path: '/',
			name: 'Log Out',
			icon: signoutIcon,
		}
	];

  const assignActiveItem = (itemId)=>{
    setActiveItem(itemId);
  }
  return (
    <>
        <div className='sidebar-container position-relative'>
          <div className="logo-container row mb-5">
            <div className="col-3 pe-0">
              <img src={logoImg} alt="logo-img" />
            </div>
            <div className="col-8 ps-1">
              <Link to={'/'}><h3 className='mb-0'>Motiv.</h3></Link>
            </div>
          </div>

          <div className="top-list-container">
              <ul className='ps-1'>
                {
                  listItems.slice(0,8).map((item, i)=>{
                    return(
                      <li key={i} onClick={()=>assignActiveItem(i)} className={activeItem === i? 'active':''}>
                        <Link to={item.path}><img src={item.icon} alt="icon" /><span>{item.name}</span></Link>
                      </li>
                    );
                  })
                }
              </ul>
          </div>

          <div className="bottom-list-container position-absolute">
            <ul className='ps-1'>
              {listItems.slice(8).map((item, i)=>{
                    return(
                      <li key={i}>
                        <Link to={item.path}><img src={item.icon} alt="icon" /><span>{item.name}</span></Link>
                      </li>
                    );
                  })
                }
            </ul>
          </div>
        </div>
    </>
  )
}
