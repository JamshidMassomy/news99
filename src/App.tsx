import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <body>
      {/** nav is protected under private route <App></App> */}
      <Navbar />
      <div className='dashboard-content min-h-fit bg-gray-50'>
        <Outlet />
      </div>
    </body>
  );
}

export default App;
