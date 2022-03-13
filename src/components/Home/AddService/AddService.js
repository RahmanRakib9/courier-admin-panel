import React from 'react';
import { Form } from 'react-bootstrap';

const AddService = () => {
     return (
          <section>
               <h1 style={{ textAlign: 'center' }}>ADD EVENT</h1>
               <div>
                    <Form>

                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Enter Your Service Name</Form.Label>
                              <Form.Control type="name" placeholder="Service name" />
                         </Form.Group>


                         <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Enter Your Service Image</Form.Label>
                              <Form.Control type="file" />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                              <Form.Label>Short Description About Service</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                         </Form.Group>
                         <input type="submit" value="Submit" />
                    </Form>
               </div>
          </section>
     );
};

export default AddService;