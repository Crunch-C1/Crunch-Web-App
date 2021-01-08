import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { Typography } from '@material-ui/core';
import logo from "../images/Crunch_logo_colored.png";
import "../css/stage4.css";

const Stage4 = () => {
    return (
        <div>
            <Container className="user-dashboard-main">
                
                <div className="user-dashboard-main-form-stage-four">
                    <Typography variant="h3" component="h3">Cant Find Your Item</Typography>
                    {/* <Form></Form> */}
                    <Typography variant="h3" component="h3">My Menu Items</Typography>
                    <div style={{display: "flex"}}>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Stage4;