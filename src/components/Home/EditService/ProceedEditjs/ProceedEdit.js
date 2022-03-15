import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

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
     }, [])

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

                                   <tr>
                                        <td>{rowCounter++}</td>
                                        <td>{x.name}</td>
                                        <td>{x.description}</td>
                                        <td><button>Edit</button></td>
                                   </tr>

                              )
                         }
                    </tbody>
               </Table>

          </div>
     );
};

export default ProceedEdit;


// {
//      proceedEdit.map(x => <ProceedEditTable key={x._id} x={x}></ProceedEditTable>)
// }




