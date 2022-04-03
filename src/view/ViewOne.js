import React from 'react'
import photo from "../photo/user.jpg"

function ViewOne(props) {
  return (
    
        <div className='card border border-light'>
       <div className='card-body text-center'>
       <img src={photo} className='rounded-circle img-fluid' width="150" height="110"/>
       <hr/>
            <div className='row'>
                <div className='col-sm-12'>
                    <p className='h4'>{props.data.name}</p>
                </div> 
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                <span className='text-muted'>{props.data['e-email']}</span>
                </div> 
            </div>
            
            <div className='row'>
                <div className='col-sm-6 '>
                    <div className='row'>
                        <div className='col-sm-12'>
                        <small>{props.data.Past}</small>
                        </div>
                        <div className='col-sm-12'>
                        <small className='text-muted'>Past</small>
                        </div>
                    </div>
                </div>
                
                <div className='col-sm-6'>
                <div className='row'>
                        <div className='col-sm-12'>
                        <small>{props.data.Upcoming}</small>
                        </div>
                        <div className='col-sm-12'>
                        <small className='text-muted'>Upcoming</small>
                        </div>
                    </div>
                
                
                </div>
            </div>
            <div className='row m-1'>
                
                    <button className='btn btn-default border'><small><strong className='text-secondary'>Send Message</strong></small></button>
                
            </div>
            
            
        </div>
    </div>
  
  )
}

export default ViewOne