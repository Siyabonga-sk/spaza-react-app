import React from 'react'
import {Button} from 'semantic-ui-react'

function AddToFave(props) {
    return (
        <div style = {{float: "right"}}>
            <span><Button onClick={props.onclick}> Add to fave </Button></span>
            <span><Button onClick={props.Ronclick}> remove from fave </Button></span>
        </div>
    )
}

export default AddToFave;