import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlane ,faBook, faPlaneDeparture, faPlaneArrival, faCalendarDays} from '@fortawesome/free-solid-svg-icons'


const Form = () => {

    const location = useLocation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const flight = location.state.flight;
    const token  = location.state.token;
    const selectedSeats = location.state.selectedSeats;

    const handleBook = async (e) => {
        e.preventDefault();
        window.alert("Do you like to book " + `${selectedSeats.length}` + " seats?")
    
          const response  = await fetch(
            "http://127.0.0.1:5000/api/auth/bookFlight",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
              },
              body: JSON.stringify({
                  tDate: Date.now(),
                  userId: "eetrmydn",
                  name: name,
                  email: email,
                  age: age,
                  seatNo: selectedSeats,
                  flNo: flight.flNo,
                  price: flight.price,
                  status: "booked"
              })
            })
    
            const res = await response.json();
    
            console.log(res);
    
            if (res.err) {
              window.alert(res.err);
            } else {
              window.alert(res.message + " for seat no: " + selectedSeats);
            }
      }

  return (
    <div >
        <div className="headerList bg-danger p-3 mb-5" style={{color: "white"}}>
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
    <div className='d-flex justify-content-center align-center' >
        <form className='w-25 '>
        <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">Age</label>
            <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">Seat No.</label>
            <input type="text" className="form-control" value={selectedSeats} />
        </div>
        <button type="submit" className="btn btn-dark" onClick={(e) => handleBook(e)}>Book</button>
        </form>
    </div>
    </div>
  )
}

export default Form