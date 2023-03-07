import React from 'react'
import {Nav,Navbar  } from "react-bootstrap";



export default function nav(){
    console.log('test')

  return (
    
   
   <Navbar bg="dark" variant="dark">
   
     <Navbar.Brand href="#home">Ciné</Navbar.Brand>
     <Nav className="me-auto">
       <Nav.Link href="#home">movies</Nav.Link>
       <Nav.Link href="#features">series</Nav.Link>
       <Nav.Link href="#pricing">animes</Nav.Link>
     </Nav>
   
 </Navbar>
   
   
    
    
    
    
    
    
  )
}

    
    
    
    
    
    
    
    
    
    
    
    
    
 