import './recommendationCard.scss';

import { HiOutlineArrowPath } from "react-icons/hi2";
import circleArrowIcon from './../../assets/images/dashboard/icons/circleArrow-icon.svg';
import electricityIcon from './../../assets/images/dashboard/icons/electricity-icon.svg';
import settingIcon from './../../assets/images/dashboard/icons/setting-icon.svg';


export const RecommendationCard = ({cardDetails}) => {
  return (
    <div className='recommendation-card-container mb-2' style={{backgroundColor: `${cardDetails.bgColor}`}}>
        <div className='d-flex align-items-center mb-1'>
            <img src={circleArrowIcon} alt="icon" className='pe-2'/>
            <p className='subtitle mb-0'>{cardDetails.recommendationPercentage}% Recommend</p>
        </div>

        <div className='car-img mb-2'>
            <img src={cardDetails.recommendationCar} alt="car" />
        </div>
        <p className='car-name'>{cardDetails.carName}</p>

        <div className='d-flex justify-content-between align-items-center'>
            <div className="d-flex align-items-center">
                <HiOutlineArrowPath className='gray-text fs-4 me-3'/>
                <p className='mb-0 gray-text me-3'>{cardDetails.like}</p>
                <img src={settingIcon} alt="icon"  className='me-3'/>
                <img src={electricityIcon} alt="icon" />
            </div>

            <p className='mb-0 gray-text'>${cardDetails.price}/h</p>
        </div>
    </div>
  )
}
