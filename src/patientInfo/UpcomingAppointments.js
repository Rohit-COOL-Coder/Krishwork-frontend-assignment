import React, { useCallback, useEffect, useState } from 'react'
import UAList from './UAList'

function UpcomingAppointments() {
  
  const [myAppointment , setMyAppointment]=useState([])
  const [isAvailable,setIsAvailable]=useState(false)

  const fetchAppointments=useCallback(async()=>{
   const res=await fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
   const data=await res.json()
   const firstData=data[0]
   setMyAppointment(firstData)

   console.log(myAppointment["Upcoming Appointments"]);
   setIsAvailable(true)
  })

  useEffect(()=>{
  fetchAppointments()
  },[])

  const spinner=<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

  return (
    <ul class="list-group ml-4 mb-4">
  <li class="list-group-item">
    <div className='row'>
      <div className='col-sm-3'>
          <div className='row'>
                <h4 className='text-secondary'> {isAvailable?myAppointment["Upcoming Appointments"].Date:spinner}</h4>
          </div>
          <div className='row'>
          <small className='text-muted'> {isAvailable?myAppointment["Upcoming Appointments"].Time: spinner}</small>
          </div>
      </div>
      <div className='col-sm-3'>
      <div className='row'>
                <small className='text-muted'>Treatment</small>
          </div>
          <div className='row'>
          <strong className='text-secondary'> {isAvailable?myAppointment["Upcoming Appointments"].Treatment:spinner}</strong>
          </div>
      </div>
      <div className='col-sm-6'>
      <div className='row'>
        <div className='col-sm-5'>
              <div className='row'>
                  <small className='text-muted'>Dentist</small>
              </div>
              <div className='row'>
              <strong className='text-secondary'> {isAvailable?myAppointment["Upcoming Appointments"].Dentist:spinner}</strong>
              </div>
        </div>
        <div className='col-sm-5'>
          <div className='row'>
          <small className='text-muted'>Nurse</small>
              </div>
              <div className='row'>
              <strong className='text-secondary'> {isAvailable? myAppointment["Upcoming Appointments"].Nurse:spinner}</strong>
              </div>
        </div>
        <div className='col-sm-2 '>
        <button className='btn btn-sm text-primary'><i className="bi bi-journals text-primary"></i>  Note</button>
        </div>
      </div>
      </div>
    </div>
  </li>
</ul>
  )
}

export default UpcomingAppointments