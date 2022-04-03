import React from 'react'

function ViewFive() {
  return (
    <div className='card mt-4 border border-light border-rounded'>
      <div className='card-body'>
        <div className='row m-3'>
          <div className='col-sm-7 text-left'>
             <strong className='text-secondary'>File/Documents</strong>
          </div>
          <div className='col-sm-5 text-right'>
          <i class="bi bi-file-earmark-plus text-primary"></i><small className='text-primary'><strong> Add Files</strong></small>
          </div>
        </div>
        <ul class="list-group ml-2 mr-2 mb-5">
           <li class="list-group-item border border-light mb-1 ">
           <div className='row'>
             <div className='col-sm-8 text-left '>
             <i class="bi bi-file-earmark-text"></i> <small><strong className='text-secondary'>Check Up Result.pdf</strong></small>
             </div>
             <div className='col-sm-4 text-right'>
               <small className='text-muted'>123kb</small>
             </div>
           </div>
           </li>
           <li class="list-group-item border border-light mb-1 ">
           <div className='row'>
             <div className='col-sm-10 text-left '>
             <i class="bi bi-file-earmark-text"></i> <small><strong className='text-secondary'>Dental X-Ray Result 2.pdf</strong></small>
             </div>
             <div className='col-sm-2 text-right'>
               <small className='text-muted'>5kb</small>
             </div>
           </div>
           </li>
           <li class="list-group-item border border-light mb-1 ">
           <div className='row'>
             <div className='col-sm-9 text-left '>
             <i class="bi bi-file-earmark-text"></i> <small><strong className='text-secondary'>Medical Prescription.pdf</strong></small>
             </div>
             <div className='col-sm-3 text-right'>
               <small className='text-muted'>63kb</small>
             </div>
           </div>
           </li>
           <li class="list-group-item border border-light mb-1">
           <div className='row'>
             <div className='col-sm-9 text-left '>
             <i class="bi bi-file-earmark-text"></i> <small><strong className='text-secondary'>Dental X-Ray Result.pdf</strong></small>
             </div>
             <div className='col-sm-3 text-right'>
               <small className='text-muted'>123kb</small>
             </div>
           </div>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default ViewFive