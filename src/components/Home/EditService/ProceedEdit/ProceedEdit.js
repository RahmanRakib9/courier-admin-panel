import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProceedEdit = () => {
     const [proceedEdit, setProceedEdit] = useState([]);
     let rowCounter = 1;

     useEffect(() => {
          fetch('http://localhost:5000/services')
               .then(res => res.json())
               .then(data => {
                    setProceedEdit(data)
                    console.log(data);
               })
     }, []);

     //for navigate to edit page
     const navigate = useNavigate();
     const handleNavigate = editId => {
          navigate(`/edit/${editId}`)
     }

     //handle delete service
     const handleDeleteService = (deleteId) => {
          const proceed = window.confirm(`Are You Sure You Want To Delete This Service?`)
          if (proceed) {
               fetch(`http://localhost:5000/services/${deleteId}`, {
                    method: "DELETE",
                    headers: {
                         'content-type': 'application/json'
                    },
                    body: JSON.stringify(proceedEdit)
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('Service Deleted Successfully');
                              const remainingService = proceedEdit.filter(service => service._id !== deleteId);
                              setProceedEdit(remainingService);
                         }
                    })
          }
     }

     return (
          <div>
               <h1 style={{ textAlign: 'center' }}>Total Service: {proceedEdit.length}</h1>
               <Table striped bordered hover size="lg">
                    <thead>
                         <tr>
                              <th>#</th>
                              <th className='text-center'>Service Name</th>
                              <th className='text-center'>Description</th>
                              <th className='text-center'>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              proceedEdit.map(x =>
                                   < tr key={x._id} >
                                        <td>{rowCounter++}</td>
                                        <td>{x.name}</td>
                                        <td>{x.description}</td>
                                        <td>
                                             <div className='d-flex'>
                                                  <Button onClick={() => handleNavigate(x._id)} variant="primary" >Edit</Button>
                                                  <Button onClick={() => handleDeleteService(x._id)} variant="danger">Delete</Button>
                                             </div>
                                        </td>
                                   </tr>

                              )
                         }
                    </tbody>
               </Table>

          </div >
     );
};

export default ProceedEdit;







