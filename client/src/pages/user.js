import React, { useState } from 'react'
import * as Meek from 'meeks-prf-js';
// import { Container } from 'reactstrap';
import "../css/user.css";
import Sidebar from "../components/sidebar";
import Stage1 from "../components/stage1.js";
import Stage2 from "../components/stage2.js";
import Stage3 from "../components/stage3.js";
import Stage4 from '../components/stage4/stage4.js';
import Stage5 from '../components/stage5';
 const User = () => {
    
    const [stage, setStage] = useState(1);
    const [room, setRoom] = useState({});
    
    const incrementStage = () => {
        setStage(stage + 1);
    }

    return (
        <div className = "user-dashboard">
            <Sidebar/>
            {stage === 1 ? <Stage1 room={room} setRoom={setRoom} next={incrementStage} /> : null}
            {stage === 2 ? <Stage2 setRoom={setRoom} next={incrementStage} /> : null}
            {stage === 3 ? <Stage3 room={room} next={incrementStage} /> : null}
            {stage === 4 ? <Stage4 room={room} next={incrementStage} /> : null}
            {stage === 5 ? <Stage5 room={room} next={incrementStage} /> : null}
        </div>
    )
    
}

export default User;