import React from 'react'
import { Button, Icon, Image, Item, Label, Container } from 'semantic-ui-react'


const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/sho'/>

function  anItem (){
        return(
            <Container>
            <Item.Group divided>
                <Item>
                    <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                    <Item.Content>
                        <Item.Header as='a'>12 Years a Slave</Item.Header>
                        
                        <Item.Meta>
                            <span className='cinema'>Union Square 14</span>
                        
                        </Item.Meta>
                        
                        <Item.Description>{paragraph}</Item.Description>
                        
                        <Item.Extra>
                            <Button primary floated='right'>
                                Buy tickets
                                <Icon name='right chevron' />
                            </Button>
                            <Label>Limited</Label>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
            </Container>
        );
    }

export default anItem