import React, { useState } from 'react';
import {Modal,Button,Form  } from "react-bootstrap";

export default  function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [Title,setTitle]=useState("")
const [Description,setDescription]=useState("")
const [PosterURL,setPosterURL]=useState("")
const [Rate,setRate]=useState("")

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Movies Title   </Form.Label>
        <Form.Control type="text" placeholder="the movie title" onChange={(e)=> setTitle(e.target.value) }/>
        <Form.Label> Movies Description   </Form.Label>
        <Form.Control type="text" placeholder="the movie description" onChange={(e)=> setDescription(e.target.value) }        />
        <Form.Label> PosterURL  </Form.Label>
        <Form.Control type="text" placeholder="the PosterURL "    onChange={(e)=> setPosterURL(e.target.value) }       />
        <Form.Label> Movies Rate   </Form.Label>
        <Form.Control type="text" placeholder="the movie rates"   onChange={(e)=> setRate(e.target.value) }      />
      </Form.Group>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


