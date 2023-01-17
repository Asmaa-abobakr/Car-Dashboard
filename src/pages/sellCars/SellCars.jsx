import './sellcars.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { BarChart } from '../../components/barChart/BarChart';
import { SellCarCard } from '../../components/sellCarCard/SellCarCard';
import { OfferCard } from '../../components/offerCard/OfferCard';

export const SellCars = () => {
  let offersList=[45,55];
  return (
    <div className='sell-cars-container mx-auto'>
      <div className='pageTitle mb-4'>
        <h3>Sell Cars</h3>
      </div>

      <div className="row mb-4">
        <div className="col-12 col-md-8 col-sm-9 mb-2">
          <SellCarCard/>
        </div>
        <div className="col-4 col-md-4 col-sm-5 mb-2">
          <BarChart/>
        </div>
      </div>

      <div className='offers-container'>
          <div className='pageTitle mb-4'>
              <div className='d-flex justify-content-between'>
                <h3>Offers</h3> 
                <div className='d-flex'>
                  <Dropdown className='sell-dropDown mx-2'>
                    <Dropdown.Toggle  id="dropdown-basic">
                    New
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Action</Dropdown.Item>

                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className='sell-dropDown mx-2'>
                    <Dropdown.Toggle  id="dropdown-basic2">
                    Toyota
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Action</Dropdown.Item>

                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
          </div>

          {
            offersList.map((offer, i)=>{
              return(
                <div key={i}>
                  <OfferCard ImpressionShareValue={offer}/>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}
