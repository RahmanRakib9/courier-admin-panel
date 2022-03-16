import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Edit.css'

const Edit = () => {
     const { id } = useParams();
     const [edit, setEdit] = useState({});


     useEffect(() => {
          fetch(`http://localhost:5000/services/${id}`)
               .then(res => res.json())
               .then(data => {
                    setEdit(data)
               })
     }, []);

     //update service field
     const handleServiceFieldChanges = (e) => {
          const updatedName = e.target.value;
          const updatedInfo = { name: updatedName, description: edit.description, image: edit.image };

          setEdit(updatedInfo);
     };

     //update description field
     const handleDescriptionFieldChanges = (e) => {
          const updatedDescription = e.target.value;
          const updatedInfo = { description: updatedDescription, name: edit.name, image: edit.image };

          setEdit(updatedInfo);
     };

     //update image field
     const handleImageFieldChanges = (e) => {
          const updatedImage = e.target.value;
          const updatedInfo = { image: updatedImage, name: edit.name, description: edit.description };

          setEdit(updatedInfo);
     };

     //handle update user
     const handleUpdateService = (e) => {
          fetch(`http://localhost:5000/services/${id}`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(edit)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.acknowledged) {
                         alert('Service Updated Successfully');
                         setEdit({})
                    }
               })

          e.preventDefault();

     };

     return (
          < >
               <h1 style={{ textAlign: 'center' }}>EDIT SERVICE</h1>
               <Container >
                    <Form onSubmit={handleUpdateService}>
                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Service Name</Form.Label>
                              <Form.Control type="text" value={edit.name || ''} onChange={handleServiceFieldChanges} />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                              <Form.Label>Service Description</Form.Label>
                              <Form.Control as="textarea" rows={5} value={edit.description || ''} onChange={handleDescriptionFieldChanges} />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Current Service Image</Form.Label><br />
                              <img src={edit.image} alt="" />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Change Your Current Image</Form.Label>
                              <Form.Control type="text" placeholder='Enter Your New Image Url' onChange={handleImageFieldChanges} />
                         </Form.Group>

                         <input type="submit" value="Update" />
                    </Form>
               </Container>
          </>
     );
};

export default Edit;


