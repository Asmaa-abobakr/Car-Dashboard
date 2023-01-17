import './carCard.scss';
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
// import { HiOutlineArrowPath } from "react-icons/hi2";
// import { BsGrid } from "react-icons/bs";
import { useState } from 'react';

import personIcon from './../../assets/images/booking-icons/person-icon.svg';
import systemIcon from './../../assets/images/booking-icons/system-icon.svg';




export const CarCard = ({carDetails}) => {
  let [isFav, setIsFav] = useState(false);
  const toogleFavIcon = ()=>{
    isFav? setIsFav(false): setIsFav(true);
  }
  return (
    <div className="carCard-container mb-4">
        <div className='d-flex justify-content-between'>
            <p className="car-name">{carDetails.name}</p>
            <div onClick={()=>toogleFavIcon()} className="fav-icon">
                {
                    isFav?
                    <BsSuitHeartFill className='text-danger fs-4'/>:
                    <BsSuitHeart className='fs-4'/>
                }
            </div>
        </div>
        <p className="car-type">{carDetails.type}</p>
        <div className='car-img-container mx-auto text-center'>
            <img className="car-img" src={carDetails.img} alt={carDetails.name} />
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center pe-3'>
                    <img src={personIcon} alt="person-icon" className='pe-1'/>
                    <p className='mb-0 normal-text'>{carDetails.ownersNum}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <img src={systemIcon} alt="systen-icon" className='pe-1'/>
                    <p className='mb-0 normal-text'>{carDetails.system}</p>
                </div>
            </div>
            <div>
                <p className='mb-0 normal-text'><span className='bold-text'>${carDetails.price}</span>/d</p>
            </div>
        </div>
    </div>
  )
}
