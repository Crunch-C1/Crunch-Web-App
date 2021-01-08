import React, { Component } from 'react'
import { Container } from 'reactstrap';
import logo from "../images/Crunch_logo_colored.png";
import "../css/stage5.css";
import Tab from './stage5Components/tab';
import Button from '@material-ui/core/Button';

const Stage5 = () => {
    const totalPayment = 100;

    return (
        <div>
            <Container className = "user-dashboard-main-stage5">
                <div className = "user-dashboard-main-logo-stage5">
                    <img src={logo} alt='Logo image' className='logo-img'></img>
                    <h1 className='group-total-text'>Group Total</h1>
                </div>
                <div className = "user-dashboard-main-form-stage5">
                    <div className="user-tabs-stage5">
                        <Tab key={'bob'} name={'Bob'} payment={15} quantity={5} />
                        <Tab key={'sahil'} name={'Sahil'} payment={10} quantity={3} />
                        <Tab key={'sahil'} name={'Sahil'} payment={10} quantity={3} />
                        <Tab key={'sahil'} name={'Sahil'} payment={10} quantity={3} />
                        <Tab key={'sahil'} name={'Sahil'} payment={10} quantity={3} />
                        <Tab key={'sahil'} name={'Sahil'} payment={10} quantity={3} />
                    </div>
                    <div className='bottom-content'>
                        <h1>${totalPayment}</h1>
                        {/* <Button variant="outlined" className='confirm-btn'>Confirm</Button> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Stage5;



