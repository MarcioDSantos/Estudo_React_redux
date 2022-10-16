import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome ="Ana" idade={20} bool={false}></DiretaFilho>
            <DiretaFilho nome ="Jose" idade={15} bool={true}></DiretaFilho>
        </div>
    )
}