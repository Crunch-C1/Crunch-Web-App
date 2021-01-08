import React from 'react';
import {Button, Typography, ButtonBase} from '@material-ui/core';
import {Add} from "@material-ui/icons";

function Tile({name, price, clicked}){

        return(
            <ButtonBase style={{marginRight: 10}} onClick={() => clicked({name, price})}>
            <div style={{height: 129, width: 116, borderRadius: 7, border: "2px solid black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="h6">{price}</Typography>
            </div>
            </ButtonBase>
        )
    
}

export default function ItemList({items, clicked}) {
    return (
        <div style={{display: "flex", overflow: "auto"}}>
            {items.map((item, index) => <Tile key={index} name={item.name} price={item.price} clicked={() => clicked(items[index])}/>)}
        </div>
    )
}