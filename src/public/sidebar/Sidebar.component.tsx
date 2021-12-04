import React from 'react';
import { Offcanvas } from 'react-bootstrap';

export const Sidebar: React.FC = () => {
    console.log('hi');

    return (
        <>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Course Panel</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                hi
            </Offcanvas.Body>
        </>
    )
}