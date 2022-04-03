import React, { useCallback, useEffect, useState } from 'react'
import Patient from './Patient';

function PatientList() {

  const [myPatient,setMyPatient]=useState([])

  const pList=useCallback( async()=>{
    try{
      const res=await fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      if(!res.ok){
        throw new Error("problem");
      }
      const data=await res.json()
      const firstData=data[0]
      setMyPatient(firstData)
      console.log(firstData)
    }catch(e){
      console.log(e)
    }
  })

  useEffect(()=>{
   pList()
  },[])
 const List=<Patient key={myPatient.name} data={myPatient}/>
  return (
    <div>
      <div className='row'>
        <div className='col-sm-6  text-left'>
          <div className='row'>
          <div className='col-sm-1 '>
          <p className='h1 text-primary'><i class="bi bi-person"></i> </p>
          </div>
          <div className='col pt-3'>
          <p className='h3 text-secondary '><strong>{myPatient.name}</strong></p>
          </div>
          </div>
   
        </div>
        <div className='col-sm-6 '>
          <div className='row float-right '>
            <div className='col-sm-5 '>
            <input className='form-control form-input border border-1 mt-2' placeholder='search'/>
                </div>
            <div className='col-sm-2 '>
            <p className='h3 mt-1 '><i class="bi bi-plus-circle-fill "></i></p>
            </div>
            <div className='col-sm-2 '>
            <p className='h3 mt-1 '><i class="bi bi-app-indicator"></i></p>
            
            </div>
          </div>
        </div>
      </div>
      <hr className='text-muted'/>
     <div className='row'> 
      <div className='col-sm-6 '>
      <p className='h5 text-primary'>PatientList < i class="bi bi-chevron-right "></i><span className='text-muted'>{myPatient.name}</span></p> 
      </div>
      <div className='col-sm-6'>
        <div className='row text-right '>
          <div className='col-sm-7 ml-3 '>
                 <button className='btn btn-sm mt-1 border border-1 bg-white'><i class="bi bi-printer-fill text-muted"></i></button>
          </div>
          <div className='col-sm-3  '>
          <button className='btn mt-1 btn-sm border border-1 bg-white'> <strong className='text-muted'><i class="bi bi-pencil-square"></i> Edit Patient</strong></button>
          </div>
        </div>
      </div>
     </div>
      <hr className='text-muted'/>
      {List}
    </div>
  )
}

export default PatientList