import './sellCarCard.scss';
import sellCarImg from './../../assets/images/sell-car-images/sellcar.png';

export const SellCarCard = () => {
  return (
    <div className='sell-car-container'>
        <p className='car-name mb-1'>2022 Mercedes Benz</p>
        <div className='car-img-container text-center pt-0'>
          <img src={sellCarImg} alt="car" className='car-img'/>
        </div>
    </div>
  )
}
