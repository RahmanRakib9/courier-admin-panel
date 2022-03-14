import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
     return (
          <div className='sidebar-container'>
               <div className='sidebar-elements'>
                    <h2>Signed in as</h2>
                    <ul>
                         <Link to='/home' className='navigate-link'>Home</Link>
                    </ul>
                    <ul>
                         <Link to='/addService' className='navigate-link'>Add Service</Link>
                    </ul>
                    <ul>
                         <Link to='/edit' className='navigate-link'>Edit Service</Link>
                    </ul>
                    <ul>
                         <button>Log out</button>
                    </ul>
               </div>
          </div>
     );
};

export default Sidebar;