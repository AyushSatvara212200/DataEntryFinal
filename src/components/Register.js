import React from 'react';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'


export const Register = () => {

    const [productName, setProductName] = useState("");
    const [grade, setGrade] = useState("AR");
    const [quantity, setQuantity] = useState(0);
    const [customerName, setCustomerName] = useState("");
    const [remarks, setRemarks] = useState("");
    const [list, setList] = useState([]);
    console.log(productName, grade, quantity, customerName, remarks)


    const addPrdct = () => {
        console.log(productName + " " + grade + " " + quantity + " " + customerName + " " + remarks);
        Axios.post("https://data-entry-e.herokuapp.com/addProduct", {
            productName: productName,
            grade: grade,
            quantity: quantity,
            customerName: customerName,
            remarks: remarks
        }).then((response) => {
            setList([...list, { _id: response.data._id, productName: productName, grade: grade, quantity: quantity, customerName: customerName, remarks: remarks }])
        })
    };

    const deletePro = (id) => {
        Axios.delete(`https://data-entry-e.herokuapp.com/delete/${id}`).then(() => {
            setList(list.filter((val) => {
                return val._id != id;
            }))
        })
    }


    useEffect(() => {
        Axios.get("https://data-entry-e.herokuapp.com/read", {
            productName: productName,
            grade: grade,
            quantity: quantity,
            customerName: customerName,
            remarks: remarks
        }).then((response) => {
            setList(response.data)
        })
    })

    return (
        <div className='registerData'>
            <Form className='p-4'>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Product Name"
                            className="Cont_shdw mb-3">
                            <Form.Control type="text" placeholder="name@example.com" onChange={(event) => { setProductName(event.target.value) }} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel className='Cont_shdw' controlId="floatingSelect" label="Select Grade ..">
                            <Form.Select aria-label="Floating label select example" onChange={(event) => { setGrade(event.target.value) }}>
                                <option value="AR">AR</option>
                                <option value="LR">LR</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Quantity"
                            className="Cont_shdw mb-3">
                            <Form.Control type="Number" placeholder="1234" onChange={(event) => { setQuantity(event.target.value) }} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Customer Name"
                            className=" Cont_shdw mb-3">
                            <Form.Control type="text" placeholder="abcdefg" onChange={(event) => { setCustomerName(event.target.value) }} />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div class="form-floating">
                            <textarea className="form-control Cont_shdw" placeholder="Leave a comment here" id="floatingTextarea" onChange={(event) => { setRemarks(event.target.value) }}></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center mt-5'>
                        <Button variant="primary" className='Cont_shdw mb-2' onClick={addPrdct} id='addBtn'>Add Data</Button>
                    </Col>
                </Row>

            </Form>
            <Table className='table table-dark m-0'>
                <thead>
                    <tr className='tablerow'>
                        <th style={{ width: "250px", textAlign: "center", fontFamily: "monospace", fontSize: "17px" }}>Product Name</th>
                        <th style={{ width: "100px", textAlign: "center", fontFamily: "monospace", fontSize: "17px" }}>Grade</th>
                        <th style={{ width: "150px", textAlign: "center", fontFamily: "monospace", fontSize: "17px" }}>Quantity</th>
                        <th style={{ width: "270px", textAlign: "center", fontFamily: "monospace", fontSize: "17px" }}>Customer Name</th>
                        <th style={{ width: "360px", textAlign: "center", fontFamily: "monospace", fontSize: "17px" }}>Remarks</th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
            <div className="mainTable">
                <Table striped variant='dark' className='table1'>
                    {list.map((val) => {
                        return (
                            <>
                                <tbody className='showDataTable' >
                                    <tr >
                                        <td style={{ width: "250px", textAlign: "center", fontFamily: "monospace", fontSize: "15px" }}>{val.productName}</td>
                                        <td style={{ width: "100px", textAlign: "center", fontFamily: "monospace", fontSize: "15px" }}>{val.grade}</td>
                                        <td style={{ width: "150px", textAlign: "center", fontFamily: "monospace", fontSize: "15px" }}>{val.quantity}</td>
                                        <td style={{ width: "270px", textAlign: "center", fontFamily: "monospace", fontSize: "15px" }}>{val.customerName}</td>
                                        <td style={{ width: "360px", textAlign: "center", fontFamily: "monospace", fontSize: "15px" }}>{val.remarks}</td>
                                        <td className='d-flex justify-content-around'>
                                            <Button variant="success"><EditIcon /></Button>
                                            <Button variant="danger" onClick={() => { deletePro(val._id); }}><DeleteIcon /></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })}
                </Table>
            </div>

        </div>
    )
}

export default Register