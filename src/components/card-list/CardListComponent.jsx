import React from "react";

import "./CardListStyle.css";
import CardComponent from "../card/CardComponent";

const CardListComponent = (props) => {
    return (
        <div className="card-list">
            {             
                props.monsters.map(monster => (
                    <CardComponent key={monster.id} monster={monster}  /> ))
            }
        </div>
    )
}


export default CardListComponent;