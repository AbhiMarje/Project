import React, {useState} from 'react'
import './flight.css'
import Header from '../Home/Header'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SearchResult from './SearchResult'

function Flights() {

  const location = useLocation();

  const [fromCity,setFromCity] = useState(location.state.fromCity);
  const [toCity,setToCity] = useState(location.state.toCity);
  const [date,setDate] = useState(location.state.date);
  const [openDate,setOpenDate] = useState(false);
  const [res,setState] = useState(location.state.res)

  return (
    <div><Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>FROM</label>
            <input type="text" placeholder={fromCity} />
          </div>

          <div className="lsItem">
            <label>TO</label>
            <input type="text" placeholder={toCity} />
          </div>

          <div className="lsItem">
            <label>Date</label>
            <span onClick={() => setOpenDate(!openDate)}>{format(date,"dd/MM/yyyy")}</span>
            {openDate && <Calendar onChange={setDate} value={date} className="date" minDate={new Date()}/>}
          </div>

          <div className='lsItem'>
            <label>Options</label>
            <div className="lsOptionItem">
              <span className="lsOptionText">Min Price</span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Max Price</span>
              <input type="number" className="lsOptionInput" />
            </div>

            <button>Search</button>
          </div>

        </div>
        <div className="listResult">
            <SearchResult item={res} token={location.state.token}/>
        </div>
       
      </div>
    </div>
    </div>
  
  )
}

export default Flights;
