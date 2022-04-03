import React from 'react'

function ViewTwo(props) {
  return (
    
        <div className='card border border-light'>
        <div className='card-body text-center'>
            <div className='row'>
               <div className='col-sm-4'>
                  <div className='row'>
                      <div className='col-sm-12'>
                      <small className='text-muted'>Gender</small>
                      </div>
                      <div className='col-sm-12'>
                      <small>{props.data.Gender}</small>
                      </div>
                  </div>
                  <hr className='text-muted'/>
               </div>
               <div className='col-sm-4'>
               <div className='row'>
                      <div className='col-sm-12'>
                      <small className='text-muted'>Birthday</small>
                      </div>
                      <div className='col-sm-12'>
                      <small>{props.data.Birthday}</small>
                      </div>
                  </div>
                  <hr className='text-muted'/>
                   
               </div>
               <div className='col-sm-4'>
               <div className='row'>
                      <div className='col-sm-12'>
                      <small className='text-muted'>Phone Number</small>
                      </div>
                      <div className='col-sm-12'>
                      <small>{props.data['Phone Number']}</small>
                      </div>
                  </div>
                  <hr className='text-muted'/>
               </div>
            </div>

           

            <div className='row'>
            <div className='col-sm-5'>
            <div className='row'>
                      <div className='col-sm-12'>
                      <small className='text-muted'>Street Address</small>
                      </div>
                      <div className='col-sm-12'>
                      <small>{props.data['Street Address']}</small>
                      </div>
                  </div>
                  <hr className='text-muted'/>
               </div>
               <div className='col-sm-3'>
               <div className='row'>
                      <div className='col-sm-12'>
                      <small className='text-muted'>City</small>
                      </div>
                      <div className='col-sm-12'>
                      <small>----</small>
                      </div>
                  </div>
                  <hr className='text-muted'/>
                   
               </div>
               <div className='col-sm-4'>
               <div className='row'>
                      <div className='col-sm-12'>
                      <small className='text-muted'>Zip Code</small>
                      </div>
                      <div className='col-sm-12'>
                      <small>{props.data['ZIP Code']}</small>
                      </div>
                  </div>

                  <hr className='text-muted'/>
               </div>
            </div>


            <div className='row'>
            <div className='col-sm-4'>
                   
            <div className='row'>
                      <div className='col-sm-12'>
                      <small className='text-muted'>Member Status</small>
                      </div>
                      <div className='col-sm-12'>
                      <small>{props.data['Member Status']}</small>
                      </div>
                  </div>
                  <hr className='text-muted'/>
               </div>
               <div className='col-sm-4'>
               <div className='row'>
                      <div className='col-sm-12'>
                      <small className='text-muted'>Register Date</small>
                      </div>
                      <div className='col-sm-12'>
                      <small>{props.data['Register Date']}</small>
                      </div>
                  </div>  
                  <hr className='text-muted'/>  
               </div>
            </div>

          
        </div>
    </div>
    
  )
}

export default ViewTwo