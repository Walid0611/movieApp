import React from 'react'
import Rate from './Rate'
import {InputGroup, FormControl  } from "react-bootstrap";

export default function Filter() {
  return (
    <div>
    <InputGroup className="filterContainer">
    <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
    <FormControl
      placeholder="search by titles"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    <Rate rate={1}      />
    
    
    
    </div>
  )
}
