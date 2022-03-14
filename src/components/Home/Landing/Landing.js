import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import './Landing.css'

const Landing = () => {
     return (
          <div className=''>
               <div className='row w-100'>
                    <div className="col-md-6">
                         <Sidebar />
                    </div>
                    <div className="col-md-6">
                         <WelcomeMessage />
                    </div>
               </div>
          </div>
     );
};

export default Landing;

// 