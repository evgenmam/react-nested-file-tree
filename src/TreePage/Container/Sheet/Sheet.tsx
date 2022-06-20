import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { About } from './About';


export const Sheet = () => {

  return (
    <div className='right'>
      <Routes>
        <Route path='/about/:id' element={<About />} />
      </Routes>
    </div>
  );
};
