import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from 'semantic-ui-react';

    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

const TheCarousel = () => {
        return (
            <Carousel responsive={responsive}>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header>The Card</Card.Header>
                    <Card.Content>
                        hdgfdhfdzsuyfgvdsjyfsdghcfsyebfSYHYVSHVJYSBFXJHFDJYBAXFJYBFDJYSXFBJYFDSGFSDVXXHDSFDXHACHGXDVXCCF
                    </Card.Content>
                </Card>
            </Carousel>
        )
    }


export default TheCarousel;