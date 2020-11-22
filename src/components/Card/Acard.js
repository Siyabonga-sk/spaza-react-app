import React from 'react';
import {Button, Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import AddToFave from './addtofave';

function SingleCard (props){

    const card = ( 
        <Card as="a" style={{width: '-webkit-fill-available'}}>
            <CardContent>
                <CardHeader>{props.product.shopName}</CardHeader>
                <Typography variant="body2">
                    {props.product.description}
                    <br/>
                    {props.product.email}
                </Typography>

                <CardContent extra>
                    <div>
                        <Link to="/shop">
                        <Button variant="primary" color='orange'>
                            visit
                        </Button>
                        </Link>

                        <AddToFave onclick = {props.onclick} Ronclick = {props.Ronclick}/>
                    </div>
                </CardContent>
            </CardContent>
        </Card>
    );
    return card;
}

export default SingleCard