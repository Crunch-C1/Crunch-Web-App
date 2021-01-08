import React, { Component } from 'react'
import { Container } from 'reactstrap';
import "../css/user.css";
import Sidebar from "../components/sidebar";
import Stage1 from "../components/stage1.js";
import Stage2 from "../components/stage2.js";
import Stage3 from "../components/stage3.js";

export default class user extends Component {
    state = {
        currentStage: 2,
    };

    render() {
        return (
            <div className = "user-dashboard">
                <Sidebar/>
                {this.state.currentStage === 1 ? <Stage1/> : null}
                {this.state.currentStage === 2 ? <Stage2/> : null}
                {this.state.currentStage === 3 ? <Stage3/> : null}
                {this.state.currentStage === 4 ? <Stage3/> : null}
                {this.state.currentStage === 5 ? <Stage3/> : null}
            </div>
        )
    }
}
