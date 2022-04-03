import React from 'react'

function ViewThree() {
  return (
      <div className='card border border-light'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-6 text-left mb-3'>
                 <strong>Notes</strong>
            </div>
            <div className='col-sm-6 text-right'>
                <strong className='text-primary'>see all</strong>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 bg-light text-left pt-4 pb-5'>
             <div className='row'>
             <div className='col-sm-11'>
             <ul>
                <li> <span> first line with some message</span></li>
                <li><span> secound line with some message</span></li>
                <li><span> thired line with some message</span></li>
              </ul>
             </div>
             
             <div className='row'>
             <div className='col-sm-12 text-right mt-5'>
             <button className='btn btn-primary '>save note</button>
             </div>
             </div>
              
            </div>
          </div>
        </div>
        <div className='row  mt-3' >
          <div className='col-sm-12'>
            <small >Lorem ipsum dolor sit amet</small>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-sm-6 text-left'>
          <i className='bi bi-person text-primary'></i> <small className='text-muted'> Drg.Mega Nanada</small>
          </div>
          <div className='col-sm-6 text-right'>
              <small className='text-muted'>20 Nov'19</small>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default ViewThree;