import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import FormControl from 'react-bootstrap/esm/FormControl';
import Form from 'react-bootstrap/Form';


const Navbaar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h2>Data Entry</h2></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>

          <Form className="d-flex">
            <FormControl
              type="search" placeholder="Search..." className="me-2"
              aria-label="Search" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbaar