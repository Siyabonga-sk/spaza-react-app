import React from 'react'

function ShowAdded(props) {
    return (
        <div style = {{ 
                        backgroundColor: 'grey', 
                        width: '50%', 
                        justifyContent: 'center', 
                        textAlign: 'center'
                    }}>
            <h2>shopes added to faves</h2>
            <br/>
                <h4>{props.counter}</h4>
        </div>
    )
}

export default ShowAdded

