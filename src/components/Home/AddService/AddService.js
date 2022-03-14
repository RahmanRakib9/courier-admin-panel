import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddService.css';

const AddService = () => {
     const nameRef = useRef();
     const imageRef = useRef();
     const descriptionRef = useRef();


     const handleAddService = e => {
          const name = nameRef.current.value;
          const image = imageRef.current.value;
          const description = descriptionRef.current.value;
          const servicesInfo = { name, image, description };

          fetch('http://localhost:5000/services', {

               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(servicesInfo)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.acknowledged) {
                         alert('Service Added Successfully');
                         e.target.reset();
                    }
               })



          e.preventDefault();
     }


     return (
          <section>
               <h1 style={{ textAlign: 'center' }}>ADD SERVICE</h1>
               <div>
                    <Form onSubmit={handleAddService}>

                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Enter Your Service Name</Form.Label>
                              <Form.Control type="name" placeholder="Service name" ref={nameRef} required />
                         </Form.Group>


                         <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
                              <Form.Label>Enter Your Service Image Url</Form.Label>
                              <Form.Control type="text" ref={imageRef} placeholder='Image Url' required />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                              <Form.Label>Short Description About Service</Form.Label>
                              <Form.Control as="textarea" rows={3} ref={descriptionRef} required />
                         </Form.Group>
                         <input type="submit" value="Submit" />
                    </Form>
               </div>
               <div className='navigate-link-container mt-5'>
                    <Link to='/' className='navigate-links'>Home</Link>
                    <Link to='/edit' className='navigate-links'>Edit</Link>
               </div>
          </section>
     );
};

export default AddService;