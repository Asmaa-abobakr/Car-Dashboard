import './progressCard.scss';

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";

export const ProgressCard = ({cardDetails}) => {
  return (
    <div className='progress-card-container text-center' style={{backgroundColor: `${cardDetails.bgColor}`}}>
        <div>
            <img src={cardDetails.icon} alt="icon" />
        </div>
        <p className='title mb-2' style={{color: `${cardDetails.textColor}`}}>{cardDetails.title}</p>
        <div>
        <CircularProgressbar
            className='progress-chart'
            value={cardDetails.progressValue}
            text={`${cardDetails.progressText}`}
            circleRatio={0.75}
            styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            pathColor: `${cardDetails.activeColor}`,
            trailColor: `${cardDetails.inactiveColor}`,
            })}
        />
        </div>
    </div>
  )
}
