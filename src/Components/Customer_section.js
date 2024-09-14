import React from 'react'
import "./Customer_section.css"
import Customer1 from "../assets/Customer1.png"
import Customer2 from "../assets/Customer2.png"
import Customer3 from "../assets/Customer3.png"
// import Vector2 from "../assets/Vector2.png"

export default function CustomerSection() {
  return (
    <>
    <div className='customer-section'>
      <h3 className='customer-heading'>Our customers love us</h3>

      <div className='flex-box3'>

        <div className='flex-item3 customer-item-1'>
            <p>ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.</p>
            <div className='customer-div'>
                <img src={Customer1} alt="logo"></img>
                <div>
                    <h3>Rohit Mehra</h3>
                    <div>CFO, XYZ</div>
                </div>
            </div>
        </div>

        <div className='flex-item3 customer-item-2'>
            <p>ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.</p>
            <div className='customer-div'>
                <img src={Customer2} alt="logo"></img>
                <div>
                    <h3>Alan Turing</h3>
                    <div>CFO, XYZ</div>
                </div>
            </div>
        </div>

        <div className='flex-item3 customer-item-3'>
            <p>ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.</p>
            <div className='customer-div'>
                <img src={Customer3} alt="logo"></img>
                <div>
                    <h3>Mark Jacob</h3>
                    <div>CEO, XYZ</div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div className='customer-info-div'>
        <h3 className='customer-heading'>Manage your travel and expenses the smart way!</h3>    
        <div className='info-div'>
            <div className='user-div'>
                <div className='box1'>Name</div>
                <div className='box2'>Office email-id</div>
                <div className='button2'>Start trail</div>
            </div>
            <div className='free-trail'> 30 Days free trial <div className='circle'></div> Upto 10 users</div>
        </div>
    </div>
    </>
  )
}
