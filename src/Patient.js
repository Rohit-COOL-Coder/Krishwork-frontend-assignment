import React from 'react'
import ViewOne from './view/ViewOne'
import ViewThree from './view/ViewThree'
import ViewTwo from './view/ViewTwo'
import ViewFour from './view/ViewFour'
import ViewFive from './view/ViewFive'

function Patient(props) {

  return (
      <div className='container'>
          <div className='row'>
              <div className='col-lg-3'>
                 <ViewOne data={props.data}/>
              </div>
              <div className='col-lg-5'>
                 <ViewTwo data={props.data}/>
              </div>
              <div className='col-lg-4'>
                 <ViewThree data={props.data}/>
              </div>
          </div>
          <div className='row'>
          <div className='col-lg-8'>
                 <ViewFour data={props.data}/>
              </div>
              
              <div className='col-lg-4'>
                 <ViewFive data={props.data}/>
              </div>
          </div>
      </div>
    )
}

export default Patient