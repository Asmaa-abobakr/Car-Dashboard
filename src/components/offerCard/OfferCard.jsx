import './offercard.scss';
import {BsArrowRight} from "react-icons/bs";
import {BsCurrencyDollar} from "react-icons/bs";
import {IoCar} from "react-icons/io5";
import {RiShareForwardLine} from "react-icons/ri";

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";


export const OfferCard = ({ImpressionShareValue}) => {
  return (
    <div className='offer-card-container mb-4 w-100'>
        <div className="row">
            <div className="col-10 col-lg-2 col-sm-6 mb-2">
                <p className="title mb-0">Killan James</p>
                <p className='price-text mb-0'><span className='price'>$16,605</span> average price </p>
                <p className='normal-text mb-1'>market average is $16,224</p>
                <button className='see-more-btn'><BsArrowRight/></button>
            </div>

            <div className="col-10 col-lg-2 col-sm-6  mb-2 px-1">
                <div className='share-chart'>
                    <CircularProgressbar
                        className='progress-chart'
                        value={ImpressionShareValue}
                        text={`${ImpressionShareValue}%`}
                        circleRatio={0.75}
                        styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "#70CF97",
                        trailColor: "#F3F3F3",
                        })}
                    />
                    <p className='small-text text-center mb-0'>Excellent</p>
                    <p className='normal-text mb-0'>Impression Share</p>
                </div>
            </div>

            <div className="col-10 col-lg-2 col-sm-6  mb-2">
                <div className='childern-chart-container'>
                    <CircularProgressbarWithChildren
                        value={65}
                        strokeWidth={6}
                        styles={buildStyles({
                        pathColor: "#A162F7",
                        trailColor: "#F3F3F3"
                        })}
                    >
                        <div style={{ width: "80%" }}>
                            <CircularProgressbar
                                className='childern-chart'
                                value={80}
                                text={`$811`}
                                styles={buildStyles({
                                trailColor: "#F3F3F3",
                                pathColor: "#FF6370",
                                })}
                            />
                            </div>   
                    </CircularProgressbarWithChildren>
                </div>
            </div>

            <div className="col-10 col-lg-2 col-sm-6  mb-2">
                <div><IoCar className="offer-icon fs-2 blue bg-blue"/></div>
                <p className='offer-price mb-0 blue'>$1,174</p>
                <p className='normal-text'>Model Spend</p>
            </div>

            <div className="col-10 col-lg-2 col-sm-6  mb-2">
                <div><RiShareForwardLine className="offer-icon fs-2 red bg-red"/></div>
                <p className='offer-price mb-0 red'>$1,174</p>
                <p className='normal-text'>Model Spend</p>
            </div>

            <div className="col-10 col-lg-2 col-sm-6  mb-2">
                <div><BsCurrencyDollar className="offer-icon fs-2 purple bg-purple"/></div>
                <p className='offer-price mb-0 purple'>$1,174</p>
                <p className='normal-text'>Model Spend</p>
            </div>
        </div>
    </div>
  )
}
