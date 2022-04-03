import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function ViewFour() {
  const navigate=useNavigate()
  useEffect(()=>{
    navigate("/patientList/UpcomingAppointments")
  },[])
  return (
    <div className=''>
      <div className='card border border-light'>
        <div className='card-body '>
          <div className='row'>
            <div className='col-sm-9 m-3  bg-light rounded  '>
              <div className='row'>
              <div className='col-sm-4'>
              <button className='btn-sm btn bg-white mt-1 mb-1  '><small><strong className='text-primary'><Link className='nav-link ' to="/patientList/UpcomingAppointments">Upcoming Appt</Link></strong></small></button>
            </div>
            <div className='col-sm-4'>
              <button className='btn btn-sm btn'><small><strong className='text-muted'><Link className='nav-link text-secondary' to="/patientList/PastAppointments">Past Appt</Link></strong></small></button>
            </div>
            <div className='col-sm-4'>
              <button className='btn btn-sm'><small><strong className='text-muted'><Link className='nav-link text-secondary' to="/patientList/MedicalRecords">Medical Records</Link></strong></small></button>
            </div>
              </div>
            </div>
          </div>
          <div className='row bg-light m-1 rounded '>
            <div className='row p-3'>
              <div className='col-sm-6 text-left'>
                <small><strong className='text-secondary'>Root Canal Treatment</strong></small>
              </div>
              <div className='col-sm-6 text-right'>
                <button className='btn btn-sm border bg-white'><small className='text-muted'><i class="bi bi-chevron-up"></i> Show Previous Treatment</small></button>
              </div>
              
            </div>
            <div className='row'>
            <hr className='text-muted'/>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewFour