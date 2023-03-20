import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './component/navbar/Navbar';
// import Spinner from './component/base/spinner/spinner';

function App() {
  return (
    <body>
      <Navbar />
      <div className='dashboard-content min-h-fit bg-gray-50'>
        <Outlet />
      </div>
    </body>
  );
}

export default App;
