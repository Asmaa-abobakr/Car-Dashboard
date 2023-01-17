import './nav.scss';
import { useState } from 'react';
import searchIcon from "./../../../assets/images/navbar/search-icon.svg";
import notificationIcon from "./../../../assets/images/navbar/notification-icon.svg";
import profilePicture from "./../../../assets/images/navbar/profile-img.png";


export const Nav = () => {
  let [searchValue, setSearchValue] = useState('');

	const getInputData = (e) => {
		if (e.keyCode === 13) {
			setSearchValue(e.target.value);
			e.target.value = '';
			console.log(searchValue);
		}
	};
  return (
    <>
      <div className="navbar-container mb-3">
        <div className="row">
          <div className="col-10 col-sm-10">
              <div className="nav-search-container">
                <img src={searchIcon} alt="search-icon" />
                <input className=" ms-md-1" type="search" placeholder="Search or Type" onKeyDown={(event) => getInputData(event)} />
              </div>
          </div>
          <div className="col-1 align-items-center d-flex flex-row-reverse">
              <img src={notificationIcon} alt="notification-icon" className='notification-icon' />
          </div>
          <div className="col-1 align-items-center d-flex flex-row-reverse">
              <img className="profile-img" src={profilePicture} alt="profile" />
          </div>
        </div>
      </div>
    </>
  )
}
