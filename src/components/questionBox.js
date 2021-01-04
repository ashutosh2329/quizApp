import React, { useState } from "react"; 
import Button from '@material-ui/core/Button';



export default function questionBox(props) {
    return (
        <div>
            <div>
                {props.question}
            </div>
            <Button variant="contained" color="secondary">
                {props.option}
              
            </Button>
        </div>
    )
}