import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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

     const navigate = useNavigate();
     const handleNavigate = editId => {
          navigate(`/edit/${editId}`)
     }

     return (
          <div>
               <h1 style={{ textAlign: 'center' }}>Total Service: {proceedEdit.length}</h1>
               <Table striped bordered hover size="sm">
                    <thead>
                         <tr>
                              <th>#</th>
                              <th>Service Name</th>
                              <th>Description</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              proceedEdit.map(x =>
                                   <tr key={x._id}>
                                        <td>{rowCounter++}</td>
                                        <td>{x.name}</td>
                                        <td>{x.description}</td>
                                        <td><button onClick={() => handleNavigate(x._id)}>Edit</button></td>
                                   </tr>

                              )
                         }
                    </tbody>
               </Table>

          </div>
     );
};

export default ProceedEdit;







