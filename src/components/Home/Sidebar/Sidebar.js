import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
     return (
          <div className='sidebar-container'>
               <div className='sidebar-elements'>
                    <h2 className='mt-5'>Signed in as</h2>

                    <Link to='/home' className='navigate-link'>Home</Link>

                    <Link to='/addService' className='navigate-link'>Add Service</Link>

                    <Link to='/proceedEdit' className='navigate-link'>Edit Service</Link>

                    <Link to='/updatePrice' className='navigate-link'>Update Price</Link>

                    <button style={{ marginTop: "15%" }}>Log out</button>

               </div>
          </div>
     );
};

export default Sidebar;