import React, { useEffect, useState } from 'react'
import { Container, InputGroup, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap';

// import logo from "../../images/Crunch_logo_colored.png";
import "../../css/stage4.css";
import ItemList from './ItemList';
import Title from '../util/Title/Title';
import { FormControl, Button } from '@material-ui/core';
import { fetchCategories } from '../../api/Util';

// const MenuModal = ({addItem, show, onHide}) => {
//     return (
//     );
// }

// const EntryModal = ({addItem, show, onHide}) => {
//     return (
//     );
// }

// const AddItemsMenu = () => {
//     return (
//         <div>
//             <Title>Select Items</Title>
//             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
//                 <Button variant="outlined" color="secondary" size="large" onClick={() => {return true;}}>Browse Menu</Button>
//                 <Title>OR</Title>
//                 <Button variant="outlined" color="secondary" size="large" onClick={() => true}>Add Manually</Button>
//             </div>
//         </div>

//     );
// }

const AddItemForm = ({addItem}) => {

    const [foodName, setFoodName] = useState("");
    const [foodCost, setFoodCost] = useState("");

    return (
        <div className = "manual">
            <Title>Can't Find Your Item? Add Manually.</Title>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: "70%"}}>
                <Input placeholder={"Name"} type="text" style={{marginBottom: 10}} onInput={(event) => setFoodName(event.target.value)}></Input>
                <Input placeholder={"Price"} onInput={(event) => {setFoodCost(event.target.value)}} min={0} max={1e6} type="number" style={{marginBottom: 10}}></Input>
                <Button variant="outlined" onClick={() => {addItem(foodName, foodCost);}}>Submit</Button>
            </div>
        </div>

    );
}

const extractItemsFromCategories = (categories) => {
    const menu = [];
    for (let category of categories) {
        for(let item of category.items) {
            menu.push({name: item.name, price: item.price.$numberDecimal});
        }
    }
    return menu;
}

const Stage4 = ({setBalance}) => {
    
    const [myMenuItems, setMyMenuItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [menu, setMenu] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(async () => {
        const newCategories = await fetchCategories("5ff7919db010363394a1a011");
        setCategories(newCategories);
        let menuItems = extractItemsFromCategories(newCategories);
        // console.log(menuItems);
        setMenu(menuItems);
    }, []);

    return (
        <div>
            <Container className="user-dashboard-main-stage-four" fluid={true}>
                <div className="user-dashboard-main-form-stage-four">
                    {/* <AddItemsMenu showMenu={menuShow} toggleMenu={(newVal) => setMenuShow(newVal)} showEntry={manualEntryShow} toggleEntry={(newVal) => setManualEntryShow(newVal)}/>
                    <Title variant="h4" component="h3">My Menu Items</Title>
                    <ItemList items={[]}></ItemList> */
                    }
                    <Title>Menu Items</Title>
                    <ItemList items={menu} clicked={(item) => {console.log("ITEM:",item); setMyMenuItems(myMenuItems.concat(item));}}/>
                    <AddItemForm addItem={(foodName, foodCost) => setMyMenuItems(myMenuItems.concat({name: foodName, price: foodCost}))}/>
                    <Title>My Items</Title>
                    <ItemList items={myMenuItems} clicked={(item) => console.log("Stuff")}/>
    
                </div>
            </Container>
        </div>
    )
};

export default Stage4;