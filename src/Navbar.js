import React, { useCallback, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import photo from "./photo/docter.jpg"
import logo from "./photo/logo.png"

function Navbar(){


    const [docter , setDocter]=useState([])
    
    const navigate=useNavigate()
    const fetchDocter=useCallback(async()=>{
        const res=await fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
        const data=await res.json()
        const firstIndex=data[0]
        setDocter(firstIndex)
        console.log(docter)
        
    })
    useEffect(()=>{
        fetchDocter()
        navigate("/patientList")
    },[])
    return(
    <div className="row">
        <div className="col-sm-2">
        <ul class="nav flex-column ">
        <li className='nav-item'>
            <div className="row ">
                <div className="col-sm-3 ">
                <img src={logo} className='m-2 rounded-circle img-fluid' width="40"/>
                </div>
                <div className="col-sm-9 mt-1 ">
                <div className="row">
                    <div className="col-sm-12 ">
                    <p className="h2"><strong>Zendenta</strong></p>
                    </div>
                    <div className="col-sm-12 ">
                        <small className="text-muted">Cabut glgi tanpa sakit</small>
                    </div>
                </div>
                </div>
            </div>
     
        </li>
           
        <li className='nav-item'>
             <Link className='nav-link' to='/overview'><i className='bi bi-person-badge text-muted'></i><strong className="text-secondary"> Overview</strong></Link>
         </li>
         <li className='nav-item'>
             <Link className='nav-link' to='/Calender'><i className="bi bi-calendar2-minus text-muted"></i><strong className="text-secondary"> Calender</strong></Link>
         </li>
         <li className='nav-item'>
             <Link className='nav-link' to='/patientList'><i className="bi bi-person text-muted"></i><strong className="text-secondary"> Patient List</strong></Link>
         </li>
         <li className='nav-item'>
             <Link className='nav-link' to='/messages'><i className="bi bi-chat-left-dots text-muted"></i><strong className="text-secondary"> Message</strong></Link>
         </li>
         <li className='nav-item'>
             <Link className='nav-link' to='/paymentInformation'><i className="bi bi-wallet text-muted"></i><strong className="text-secondary"> Payment Info</strong></Link>
         </li>
         <li className='nav-item'>
             <Link className='nav-link' to='/settings'><i className='bi bi-gear text-muted'></i><strong className="text-secondary"> settings</strong></Link>
         </li>

        </ul>
        <hr className="text-muted mt-5"/>
        <div className="row mt-5">
            <div className="col-sm-3  mt-2">
            <img src={photo} className='rounded-circle img-fluid' width="190" height="150"/>
            </div>
            <div className="col-sm-7 ">
                <div className="row">
                    <div className="col-sm-12">
                      <small><strong className="text-muted">{docter.name}</strong></small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <small className="text-">{docter.specification}</small>
                    </div>
                </div>
            </div>
            <div className="col-sm-2  mt-2 ">
            <i class="bi bi-chevron-down"></i> 
            </div>
        </div>
        </div>
        <div className="col-sm-10 bg-light">
            <Outlet/>
        </div>
    </div>

    )
}

export default Navbar












