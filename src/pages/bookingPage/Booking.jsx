import './booking.scss';
import car1 from './../../assets/images/cars-images/car1.png';
import car2 from './../../assets/images/cars-images/car2.png';
import car3 from './../../assets/images/cars-images/car3.png';
import car4 from './../../assets/images/cars-images/car4.png';
import car5 from './../../assets/images/cars-images/car5.png';
import car6 from './../../assets/images/cars-images/car6.png';
import car7 from './../../assets/images/cars-images/car7.png';
import car8 from './../../assets/images/cars-images/car8.png';
import car9 from './../../assets/images/cars-images/car9.png';

import { CarCard } from '../../components/carCard/CarCard';

export const Booking = () => {
  let carsList = [
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car1,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car2,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car3,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car4,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car5,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car6,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car7,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car8,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      img: car9,
      ownersNum: 4,
      system: "Manual",
      price: 400
    },
]
  return (
    <div className='booking-container mx-auto'>
      <div className='pageTitle mb-4'>
          <h3>Booking</h3>
      </div>
      <div className='carCards-container mx-auto'>
        <div className="row">
          {
            carsList.map((carData, i)=>{
              return(
                <>
                 <div className="col-12 col-lg-4 col-md-6 col-sm-11" key={i}>
                  <CarCard carDetails={carData}/>
                 </div>
                </>
              )
            })
          }
        </div>
    </div>
    </div>
  )
}
