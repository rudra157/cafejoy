// import React, { useRef, useState } from 'react'
import logo from './images/logo.png'
import './Form.css'

const Form = () => {
    // const [formdata, setformdata] = useState({
    //     firstName: '',
    //     lastName: '',
    //     dob: '',
    //     date: '',
    //     email: '',
    //     phone: '',
    //     address1: '',
    //     address2: '',
    //     city: '',
    //     state: ''
    // });

    return (
        <div>
            <form>
                <img src={logo} className="logo" alt="Error" />
                <h1>Travel Registration Form</h1>
                <p>Please fill out the form below to register for the upcoming travel event.</p>

                <div className="row">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="text" placeholder="MM-DD-YYYY" />
                        <input type="text" placeholder="Date" />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="example@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="(000) 000-0000" />
                        <small>Please enter a valid phone number.</small>
                    </div>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" placeholder="Street Address" />
                    <input type="text" placeholder="Street Address Line 2" />
                    <div className="row">
                        <input type="text" placeholder="City" />
                        <select>
                            <option>Please Select</option>
                            <option>State 1</option>
                            <option>State 2</option>
                        </select>
                    </div>
                </div>
                <h3>profile Progress</h3>
                <progress value={0.10} />
                <button className='submit'>Submit</button>
            </form>
        </div>
    )
}

// export default Form
