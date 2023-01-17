import './dashboard.scss';
import {ProgressCard} from './../../components/progressCard/ProgressCard';
import { RecommendationCard } from '../../components/recommendationCard/RecommendationCard';
import { BarChart } from '../../components/dashboardCharts/BarChart';

import energyIcon from './../../assets/images/dashboard/icons/energy-icon.svg';
import rangeIcon from './../../assets/images/dashboard/icons/range-icon.svg';
import fluidIcon from './../../assets/images/dashboard/icons/fluid-icon.svg';
import tireIcon from './../../assets/images/dashboard/icons/tire-icon.svg';
import car1 from './../../assets/images/dashboard/images/car1.png';
import car2 from './../../assets/images/dashboard/images/car2.png';
import car3 from './../../assets/images/dashboard/images/car3.png';


export const Dashboard = () => {
  let progressCardList = [
    {
      icon: energyIcon,
      title: "Energy",
      progressValue: 45,
      progressText: "45%",
      bgColor: "#A162F7",
      textColor: "#FFFFFF",
      activeColor: "#FFFFFF",
      inactiveColor: "#B37EFC",
    },
    {
      icon: rangeIcon,
      title: "Range",
      progressValue: 52,
      progressText: "157K",
      bgColor: "#FFFFFF",
      textColor: "#242731",
      activeColor: "#FF7E86",
      inactiveColor: "#F4F5F9",
    },
    {
      icon: fluidIcon,
      title: "Break fluid",
      progressValue: 9,
      progressText: "9 %",
      bgColor: "#FFFFFF",
      textColor: "#242731",
      activeColor: "#A162F7",
      inactiveColor: "#F4F5F9",
    },
    {
      icon: tireIcon,
      title: "Tire Wear",
      progressValue: 25,
      progressText: "25%",
      bgColor: "#FFFFFF",
      textColor: "#242731",
      activeColor: "#F6CC0D",
      inactiveColor: "#F4F5F9",
    },
  ];

  let recommendationList =[
    {
      recommendationPercentage: 64,
      recommendationCar: car1,
      carName: "Mini Cooper",
      like:"132K",
      price: 32,
      bgColor: "#E1DFA4"
    },
    {
      recommendationPercentage: 74,
      recommendationCar: car2,
      carName: "Porsche 911 Carrera",
      like:"130K",
      price: 28,
      bgColor: "#E3ECF1"
    },
    {
      recommendationPercentage: 74,
      recommendationCar: car3,
      carName: "Porsche 911 Carrera",
      like:"130K",
      price: 28,
      bgColor: "#F4E3E5"
    },
  ];

  return (
    <div className='dashboard-container mx-auto'>

        <div className="row mb-3">
          {
            progressCardList.map((cardDetails, i)=>{
              return(
                <div className="col-12 col-md-3 col-sm-6" key={i}>
                   <ProgressCard cardDetails={cardDetails}/>
                </div>
              )
            })
          }
        </div>

        <div className="row mb-3">
          <div className="col-12 col-lg-6 col-sm-8 mb-2">
              <BarChart />
          </div>
          <div className="col-12 col-lg-6 col-sm-8 mb-2">
              <BarChart />
          </div>
        </div>

        <div className="row mb-1">
          {
            recommendationList.map((card, i)=>{
              return (
                <div className="col-lg-4 col-sm-6 col-12" key={i}>
                  <RecommendationCard cardDetails= {card} />
                </div>
              )
            })
          }
        </div>
    </div>
  )
}
