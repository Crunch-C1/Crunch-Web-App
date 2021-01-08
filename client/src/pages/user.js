import React, { Component } from 'react'
// import { Container } from 'reactstrap';
import "../css/user.css";
import Sidebar from "../components/sidebar";
import Stage1 from "../components/stage1.js";
import Stage2 from "../components/stage2.js";
import Stage3 from "../components/stage3.js";
import Stage4 from '../components/stage4/stage4.js';
export default class user extends Component {
    state = {
<<<<<<< HEAD
        currentStage: 5,
=======
        currentStage: 4,
        
>>>>>>> 8d0b80271e45beb5809cc8e31eda39960d3bcceb
    };

    render() {
        return (
            <div className = "user-dashboard">
                <Sidebar/>
                {this.state.currentStage === 1 ? <Stage1/> : null}
                {this.state.currentStage === 2 ? <Stage2/> : null}
                {this.state.currentStage === 3 ? <Stage3/> : null}
                {this.state.currentStage === 4 ? <Stage4/> : null}
                {this.state.currentStage === 5 ? <Stage5/> : null}
            </div>
        )
    }
}
