import { Col, Row } from 'antd'
import React from 'react'
import { FiUploadCloud } from "react-icons/fi";
const Restaurant_owner = () => {
  return (
    <div className='cardrest'>
      <div className='toprest'>Restaurant Information</div>
      <div className='text-end'>
        <button className='Savebtnrest px-2'>Save</button>
      </div>
      <div className='onerfontstyle'>Owner details</div>
      <Row className='margirowrest mt-1'>
        <Col md={8} className="padingcolrest">
          <label className='labelfontrest'>Name</label><br />
          <input className='inputrest' />
          <label className='labelfontrest'>Mail ID</label><br />
          <input className='inputrest' />
          <label className='labelfontrest'>Pincode</label><br />
          <input className='inputrest' />
        </Col>
        <Col md={8} className="padingcolrest">
          <label className='labelfontrest'>Mobile number</label><br />
          <input className='inputrest' />
          <label className='labelfontrest'>Whats up Number</label><br />
          <input className='inputrest' />
          <label className='labelfontrest'>City</label><br />
          <input className='inputrest' />
        </Col>
        <Col md={8} className="padingcolrest">
          <label className='labelfontrest'>Address</label><br />
          <textarea className='inputrestaddress' type='textarea' />
        </Col>
      </Row>
      <div className='onerfontstyle py-4'>Profile Photo</div>
      <Row className="mx-2 mt-1 mb-4">
        <Col md={8} className='w-100'>
          <div className='browscard py-4'>
            <div className='d-flex justify-content-center'>
              <div className='Uploadfont'>
                <FiUploadCloud className='fs-1 ms-4' />
                <div className=''>Upload Image</div>

              </div>
            </div> 
            <div className='dargfont py-1 text-center'>Drag & Drop to upload or <span className='brosefont'>Browse</span></div>
          </div>
        </Col>
        <Col md={16} className="text-end">
        </Col>
      </Row>
    </div>
  )
}
export default Restaurant_owner
