import React, {useState} from 'react'
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlane ,faBook, faPlaneDeparture, faPlaneArrival, faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import {useNavigate} from 'react-router-dom';

export default function Header({type, token}) {
    console.log(token);
  const [openDate,setOpenDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {

    const response = await fetch(
        "http://127.0.0.1:5000/api/auth/getFlights?" + "fromCity=" + 
        fromCity + "&toCity=" + toCity + "&flDate=" + format(date, "yyyy-MM-dd"),
        {
            method:"GET",
            headers: {
                "content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
    )

    const res = await response.json();
    console.log(res);

    if (res.err) {
        console.log(res.err);
    } else {    
        console.log(res.message);
        navigate('/flights' , {state : {fromCity: fromCity,toCity: toCity,date: date, res: res.message, token: token}})
    }

     
  }

  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBook} />
                <span>My Booking</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
            </div>
            { type!=="list" && 
                <><h1 className="headerTitle">Discover the world from a bird's eye view</h1>
            <p className="headerDesc">Travel far and wide with ease - book your flights with us today!</p>
            {/* Search Bar */}
            <div className="headerSearch py-4">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPlaneDeparture} className='headerIcon'/>
                    <input type="text" placeholder='FROM' className='headerSearchInput' onChange={e => setFromCity(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPlaneArrival} className='headerIcon'/>
                    <input type="text" placeholder='TO' className='headerSearchInput' onChange={e => setToCity(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                    <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{format(date,"dd/MM/yyyy")}</span>
                    {openDate && <Calendar onChange={setDate} value={date} className="headerCalender" minDate={new Date()}/>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div></>}
        </div>
    </div>
  )
}
