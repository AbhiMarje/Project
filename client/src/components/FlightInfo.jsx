import React, { useState, useEffect } from 'react'
import axios from 'axios';
import available from './seat-available.png';
import selected from './seat-selected.png';
import bookedSeat from './seat-booked.png';

const FlightInfo = () => {

  const [flight, setFlight] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [selectedCat, setSelectedCat] = useState("");
  const [services, setServices] = useState([]);
  
  const seats = [{type: "Available"}, {type: "Booked by other"}, {type: "Selected by you"}];
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJRd2g3eUNqSS0iLCJuYW1lIjoieHl6IiwiZW1haWwiOiJhYmNkQGciLCJpYXQiOjE2ODA0MTc3NjksImV4cCI6MTY4MDQyMTM2OX0.KGOueWBhd6TqSpWdy5r4NEcioKK0ouR8K3q-Md5BpMQ"

  useEffect(() => {
    getFlightInfo();

  }, []);

  const getFlightInfo = async () => {
    const response = await axios(
      {
        method: "GET",
        url: "http://127.0.0.1:5000/api/auth/getFlightInfo",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        params: {
          "flNo": "ACA1"
        }
      })

      const res = response.data.message;

      setFlight(res);
      setServices(res.services)
      console.log(res);
  
  }

  const handleBook = () => {
    window.alert("Do you like to book " + `${selectedSeats.length}` + " seats?")


    

  }



  return (
    <div className='info-container d-flex justify-content-between h-100 pt-3'>
      <div className='d-flex flex-column w-25 h-100'>
      <section className="types d-inline-block w-auto h-50 m-4 shadow-lg p-3 bg-white rounded">
        <div className="types-container h-100 d-flex justify-content-around align-items-center">
          <div className="types-card h-100 d-flex justify-content-around align-items-center flex-column">
            {seats.map((seat, i) => {
              return (
                <div key={i} className="types-card-content">
                  <span className="types-card-content-text">{seat.type}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="services d-inline-block w-auto h-50 m-4 shadow-lg p-3 mb-5 bg-white rounded">
      <div className="services-container h-100 d-flex justify-content-around align-items-center">
          <div className="services-card h-100 d-flex justify-content-around align-items-center flex-column">
            {services ? services.map((service, i) => {
              return (
                <div key={i} className="services-card-content">
                  <span className="types-card-content-text">{service}</span>
                </div>
              )
            }) : ""}
          </div>
        </div>
      </section>
      </div>
      <div className="selector-container w-100 my-4 mx-3 mb-5 shadow-lg p-3 bg-white rounded ">
        <button className='btn btn-dark mr-2' onClick={() => setSelectedCat("first")}>Show First class seats</button>
        <button className='btn btn-dark mr-2' onClick={() => setSelectedCat("bussiness")}>Show Bussiness class seats</button>
        <button className='btn btn-dark mr-2' onClick={() => setSelectedCat("economy")}>Show Economy class seats</button>
        <button className='btn btn-success px-5' onClick={handleBook}>Book</button>
        <section className='h-100 d-flex flex-column justify-content-center' >
          <div className="class-container h-75 ">
                {selectedCat === 'first' ? <ShowFirstClass seats={flight.totSeats[2]} booked={flight.bookedSeats} selected={{get: selectedSeats, set: setSelectedSeats}} /> : selectedCat === 'bussiness' ? 
                <ShowBussinessClass seats={flight.totSeats[1]} selected={{get: selectedSeats, set: setSelectedSeats}} booked={flight.bookedSeats}/> 
                : selectedCat === 'economy' ? <ShowEconomyClass selected={{get: selectedSeats, set: setSelectedSeats}} seats={flight.totSeats[0]} booked={flight.bookedSeats} /> : ""}
          </div>
        </section>
      </div>
    </div>
  )
}






const ShowFirstClass = (props) => {
  const [seats, setSeats] = useState([]);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    setSeats([...Array(props.seats).fill('f')])

    props.selected.set([]);

    let bs = [], j = 0;

    for (let i = 0; i < props.booked.length; i++) {
      if (props.booked[i].charAt(0) === 'f') {
        bs[j] = props.booked[i].substr(1, props.booked.length - 1);
        j++;
      }
    }

    setBooked([...bs]);

  }, [props.seats, props.booked])

  const handleClick = (cl, ind, e) => {
    console.log(cl + ind);
    
    if (e.target.src.toString().includes("seat-selected") ) {
      props.selected.set(props.selected.get.filter(old => old !== cl+ind))
      e.target.src = available;
    } else if (e.target.src.toString().includes("seat-booked")) {
      window.alert("Seat already booked");
    } else {
      props.selected.set(old => [...old, cl+ind])
      e.target.src = selected;
    } 
    console.log(props.selected.get);
  }

  return (
    <div className="first-class-card h-75 row row-cols-5 justify-content-center align-items-center">
    {seats.length > 1 ? seats.map((v, i) => {
      return (
        <div key={i} className="first-class-card-content col h-50 w-100 text-center" onClick={(e) => handleClick("f", i+1, e)} role='button'>
          {booked.includes(`${i+1}`) ? 
          (
            <img src={bookedSeat} id='fSeat' alt="seat" style={{height: "100px", width: "100px"}} />
          ) : 
          (
            <img src={available} id='fSeat' alt="seat" style={{height: "100px", width: "100px"}} />
          )
          }
        </div>
      )
    }) : <div className='col w-100'><h4>No first class seats found</h4></div>}
    </div>
  )
}





const ShowBussinessClass = (props) => {
  const [seats, setSeats] = useState([]);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    setSeats([...Array(props.seats).fill('b')])
    
    props.selected.set([]);
    
    let bs = [], j = 0;

    for (let i = 0; i < props.booked.length; i++) {
      if (props.booked[i].charAt(0) === 'b') {
        bs[j] = props.booked[i].substr(1, props.booked.length - 1);
        j++;
      }
    }

    console.log(bs);
    setBooked([...bs]);

  }, [props.seats, props.booked])

  const handleClick = (cl, ind, e) => {
    console.log(cl + ind);
    
    if (e.target.src.toString().includes("seat-selected") ) {
      props.selected.set(props.selected.get.filter(old => old !== cl+ind))
      e.target.src = available;
    } else if (e.target.src.toString().includes("seat-booked")) {
      window.alert("Seat already booked");
    } else {
      props.selected.set(old => [...old, cl+ind])
      e.target.src = selected;
    } 
    console.log(props.selected.get);
  }

  return (
    <div className="bussiness-class-card h-75 row row-cols-5 justify-content-center align-items-center">
    {seats.map((v, i) => {
      return (
        <div key={i} className="bussiness-class-card-content col h-25 w-100 text-center" onClick={(e) => handleClick("b", i+1, e)} role='button'>
          {booked.includes(`${i+1}`) ? 
          (
            <img src={bookedSeat} id='bSeat' alt="seat" style={{height: "100px", width: "100px"}} />
          ) : 
          (
            <img src={available} id='bSeat' alt="seat" style={{height: "100px", width: "100px"}} />
          )
          }
          
        </div>
      )
    })}
    </div>
  )
}





const ShowEconomyClass = (props) => {
  const [seats, setSeats] = useState([]);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    setSeats([...Array(props.seats).fill('e')])

    props.selected.set([]);

    let bs = [], j = 0;

    for (let i = 0; i < props.booked.length; i++) {
      if (props.booked[i].charAt(0) === 'e') {
        bs[j] = props.booked[i].substr(1, props.booked.length - 1);
        j++;
      }
    }

    setBooked([...bs]);

  }, [props.seats, props.booked])

  const handleClick = (cl, ind, e) => {
    console.log(cl + ind);
    
    if (e.target.src.toString().includes("seat-selected") ) {
      props.selected.set(props.selected.get.filter(old => old !== cl+ind))
      e.target.src = available;
    } else if (e.target.src.toString().includes("seat-booked")) {
      window.alert("Seat already booked");
    } else {
      props.selected.set(old => [...old, cl+ind])
      e.target.src = selected;
    } 
    console.log(props.selected.get);
  }

  return (
    <div className="economy-class-card h-75 row row-cols-5 justify-content-center align-items-center" >
    {seats.map((v, i) => {
      return (
        <div key={i} className="economy-class-card-content col h-25 text-center"  onClick={(e) => handleClick("e", i+1, e)} role='button'>
         {booked.includes(`${i+1}`) ? 
          (
            <img src={bookedSeat} alt="seat" style={{height: "100px", width: "100px"}} />
          ) : 
          (
            <img src={available} alt="seat" style={{height: "100px", width: "100px"}} />
          )
          }
        </div>
      )
    })}
    </div>
  )
}

export default FlightInfo