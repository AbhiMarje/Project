import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="first-class-container flex-grow-1 d-block">
      <div className="first-class-container h-100 d-flex flex-column justify-content-around align-items-center">
              {/* {!fcCount ? "" : ( */}
                <div className="first-class-container h-100 d-flex flex-column justify-content-around align-items-center">
                  <h5>First Class</h5>
                  <div className="first-class-card row row-cols-5 justify-content-start align-items-center" style={{height: "7rem", width: "50rem"}}>
                    {fcCount.map((v, i) => {
                        return (
                          <div key={i} className="first-class-card-content col h-100 w-100 text-center" onClick={() => handleClick("f", i+1)} role='button'>
                            <span className="first-class-card-content-text">Seat {v}</span>
                          </div>
                        )
                    })}
                  </div>
                </div>
              {/* )} */}
           </div>
          </div>
          <div className="bussiness-class-container flex-grow-1 d-block">
            <div className="bussiness-class-container h-100 d-flex flex-column justify-content-around align-items-center">
              {/* {!bcCount ? "" : ( */}
                <div className='bussiness-class-container h-100 d-flex flex-column justify-content-around align-items-center'>
                  <h5>Bussiness Class</h5>
                    <div className="bussiness-class-card row row-cols-5 justify-content-start align-items-center" style={{height: "7rem", width: "50rem"}} >
                      {bcCount.map((v, i) => {
                        return (
                          <div key={i} className="business-class-card-content col h-100 w-100 text-center" onClick={() => handleClick("b", i+1)} role='button'>
                            <span className="business-class-card-content-text">Seat {v}</span>
                          </div>
                        )
                      })}
                    </div>
                </div>
              {/* )} */}
            </div>
          </div>
          <div className="economy-class-container flex-grow-1 d-block">
            <div className="economy-class-container h-100 d-flex flex-column ustify-content-around align-items-center">
              {/* {!ecCount ? "" : ( */}
                <div className="economy-class-container h-100 d-flex flex-column ustify-content-around align-items-center">
                  <h5>Economy Class</h5>
                  {/* <Seats seats={ecCount} /> */}
                    <div className="economy-class-card row row-cols-6 justify-content-start align-items-center" style={{height: "7rem", width: "60rem"}}>
                      {ecCount.map((v, i) => {
                        return (
                          <div key={i} className="economy-class-card-content col h-100 w-100 text-center" onClick={() => handleClick("e", i+1)} role='button'>
                            <span className="economy-class-card-content-text">Seat {v}</span>
                          </div>
                        )
                      })}
                    </div>
                </div>
              {/* )} */}
            </div>
            </div>
    </div>
  )
}

export default Login