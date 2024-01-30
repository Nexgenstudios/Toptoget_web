import React, { useState } from 'react'
import '../Profile/Styles/Restaurant.scss'
import { Col, Row } from 'antd'
import Maptoto from "../Comman/Maptoto"
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { DEFAULT_REG_FORM, REGISTRATION_FIELDS } from "./MockProfile"
const Restaurant = () => {
    const address = "basavanagudi, Bengaluru,  Karnataka, M4";
    const search = `https://maps.google.com/maps?q=${address}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    const [personalInfo, setPersonalInfo] = useState(DEFAULT_REG_FORM);
    const [errorMessage, setErrorMessage] = useState(DEFAULT_REG_FORM);
    const renderErrorMessage = (field) => {
        return (
            errorMessage.isValidationFailed && errorMessage[field] !== '' &&
            <FormFeedback>
                {errorMessage[field]}
            </FormFeedback>
        )
    }
    const submitForm = (e) => {
        e.preventDefault();
        // context.setLoadingMask(true)
        let validateForm = validateRegistrationForm();
        if (validateForm.isValidationFailed) {
            setErrorMessage(validateForm);
            // context.setLoadingMask(false)
        }
    }
    const validateRegistrationForm = () => {
        let formData = personalInfo;
        let errorMessage = { ...DEFAULT_REG_FORM, isValidationFailed: false };
        if (formData.Restaurant_Name === '') {
            errorMessage = {
                ...errorMessage,
                Restaurant_Name: 'Please enter the Restaurant Name',
                isValidationFailed: true
            }
        }
       
        if (formData.Landline_number === '') {
            errorMessage = {
                ...errorMessage,
                Landline_number: 'Please Enter the Landline number',
                isValidationFailed: true
            }
        }
        if (formData.Latitude === '') {
            errorMessage = {
                ...errorMessage,
                Latitude: 'Please Enter the Latitude',
                isValidationFailed: true
            }
        }
        if (formData.Address === '') {
            errorMessage = {
                ...errorMessage,
                Address: "Please Enter The Address",
                isValidationFailed: true
            }
        }
        if (formData.City === '') {
            errorMessage = {
                ...errorMessage,
                City: "Please Enter City",
                isValidationFailed: true
            }
        }
        if (formData.Open_time === '') {
            errorMessage = {
                ...errorMessage,
                Open_time: "Please Enter Open time",
                isValidationFailed: true
            }
        }
        if (formData.Close_Time === '') {
            errorMessage = {
                ...errorMessage,
                Close_Time: "Please Enter Close Time",
                isValidationFailed: true
            }
        }
        if (formData.Day === '') {
            errorMessage = {
                ...errorMessage,
                Day: "Please Enter Day",
                isValidationFailed: true
            }
        }
        if (formData.Longitude === '') {
            errorMessage = {
                ...errorMessage,
                Longitude: "Please Enter the Longitude",
                isValidationFailed: true
            }
        }
        if (formData.Mobile_number === '') {
            errorMessage = { ...errorMessage, Mobile_number: 'Please fill the Mobile number', isValidationFailed: true }
        } else if (formData.Mobile_number !== '' && formData.Mobile_number.length !== 10) {
            errorMessage = { ...errorMessage, phone: 'Phone number length should be 10 digits', isValidationFailed: true }
        }
        if (formData.Pincode !== '' && formData.Pincode.length !== 6) {
            errorMessage = { ...errorMessage, Pincode: 'Pincode length should be 6 digits', isValidationFailed: true }
        }
        else if(formData.Pincode == '') {
            errorMessage = {
                ...errorMessage,
                Pincode: "Please Enter the Pin Code"
            }
        }
        return errorMessage;
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === REGISTRATION_FIELDS.PINCODE) {
            matchLength(name, value, 6)
        } else {
            setPersonalInfo({
                ...personalInfo,
                [name]: value
            });
        }

    }
    const matchLength = (name, value, length) => {
        if (value.length <= length) {
            setPersonalInfo({
                ...personalInfo,
                [name]: value
            });
        }
    }
    return (
        <div className='cardrest'>
            <div className='toprest py-1'>Restaurant Information</div>
            <div className='text-end'>
                <button className='Savebtnrest px-2'>Save</button>
            </div>
            <div className='onerfontstyle pb-4'>Restaurant Contact & Address</div>
            <Form onSubmit={(e) => submitForm(e)}>
                <Row className='margirowrest mt-1'>
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>Restaurant Name</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.RESTAURANT_NAME}
                                onChange={handleChange}
                                value={personalInfo.Restaurant_Name}
                                invalid={errorMessage.Restaurant_Name === '' ? false : true} />
                            {
                                renderErrorMessage('Restaurant_Name')
                            }
                        </FormGroup>
                    </Col>
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>Mobile number</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.MOBILE_NUMBER}
                                onChange={handleChange}
                                value={personalInfo.Mobile_number}
                                invalid={errorMessage.Mobile_number === '' ? false : true} />
                            {
                                renderErrorMessage('Mobile_number')
                            }
                        </FormGroup>
                    </Col>
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>Landline number</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.LANDLINE_NUMBER}
                                onChange={handleChange}
                                value={personalInfo.Landline_number}
                                invalid={errorMessage.Landline_number === '' ? false : true} />
                            {
                                renderErrorMessage('Landline_number')
                            }
                        </FormGroup>
                    </Col>
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>Address</Label><br />
                            <Input className='inputrestaddress' type='textarea' name={REGISTRATION_FIELDS.ADDRESS}
                                onChange={handleChange}
                                value={personalInfo.Address}
                                invalid={errorMessage.Address === '' ? false : true} />
                            {
                                renderErrorMessage('Address')
                            }
                        </FormGroup>
                    </Col>
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>City</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.CITY}
                                onChange={handleChange}
                                value={personalInfo.City}
                                invalid={errorMessage.City === '' ? false : true} />
                            {
                                renderErrorMessage('City')
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label className='labelfontrest'>Pincode</Label><br />
                            <Input className='inputrest' type="number" name={REGISTRATION_FIELDS.PINCODE}
                                onChange={handleChange}
                                value={personalInfo.Pincode}
                                invalid={errorMessage.Pincode === '' ? false : true} />
                            {
                                renderErrorMessage('Pincode')
                            }
                        </FormGroup>
                    </Col>
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>Longitude</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.LONGITUDE}
                                onChange={handleChange}
                                value={personalInfo.Longitude}
                                invalid={errorMessage.Longitude === '' ? false : true} />
                            {
                                renderErrorMessage('Longitude')
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label className='labelfontrest'>Latitude</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.LATITUDE}
                                onChange={handleChange}
                                value={personalInfo.Latitude}
                                invalid={errorMessage.Latitude === '' ? false : true} />
                            {
                                renderErrorMessage('Latitude')
                            }
                        </FormGroup>
                    </Col>
                    <div className='mapcard my-2'>
                        <iframe
                            // title={address}
                            src={search}
                            className='rounded-[15px]'
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        />
                    </div>
                </Row>
                <div className='onerfontstyle py-4'>Restaurant Timing & Type</div>
                <Row className="mx-2 mt-1 mb-4">
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>Open time</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.OPEN_TIME}
                                onChange={handleChange}
                                value={personalInfo.Open_time}
                                invalid={errorMessage.Open_time === '' ? false : true} />
                            {
                                renderErrorMessage('Open_time')
                            }
                        </FormGroup>
                    </Col>
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>Close Time</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.CLOSE_TIME}
                                onChange={handleChange}
                                value={personalInfo.Close_Time}
                                invalid={errorMessage.Close_Time === '' ? false : true} />
                            {
                                renderErrorMessage('Close_Time')
                            }
                        </FormGroup>
                    </Col>
                    <Col md={8} className="padingcolrest">
                        <FormGroup>
                            <Label className='labelfontrest'>Day</Label><br />
                            <Input className='inputrest' type="text" name={REGISTRATION_FIELDS.DAY}
                                onChange={handleChange}
                                value={personalInfo.Day}
                                invalid={errorMessage.Day === '' ? false : true} />
                            {
                                renderErrorMessage('Day')
                            }
                        </FormGroup>
                    </Col>
                    <Col md={12} className='px-4'>
                        <button className='addbtnrest mt-4'>+ ADD TIME</button>
                    </Col>
                    <Col md={12} className="text-end w-100 px-3">
                        <button className='Submitbtnreat px-4 mt-4 py-1' type='submit'>Submit</button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
export default Restaurant
