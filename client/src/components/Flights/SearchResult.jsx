import React from 'react'
import './searchResult.css'
import { useNavigate } from 'react-router-dom';

export default function SearchResult(props) {

    const navigate = useNavigate();

    const {item, token} = props;
    console.log(token);
    return(
    item.map((flight) => {
      console.log(flight);
        return (
            <div className='searchResult'>
                <img src="https://images.unsplash.com/photo-1583202075376-837d5ff1bf0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="srImg" />    
            <div className="srDesc">
                <h1 className="srTitle">{flight.flName}</h1>
                <span className="srFligthId">{flight.flNo}</span>
                <span className="srBoardPoint">From Airport: {flight.boardPoint} </span>
                <span className="srDestPoint">To Airport: {flight.destPoint}</span>
                <span className="srDuration"></span>
            </div>
            <div className='srDetails'>
                <div className="srDetailsText">
                    <span className="srPrice">₹{flight.price}</span>
                    <button className='srShowDetails' onClick={() => navigate('/flightInfo', {state: {token: token}})}>Show Details</button>
                </div>
            </div>
            </div>
          )
        })
    )
  }
  
