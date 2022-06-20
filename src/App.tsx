import React from 'react';
import { TreePage } from './TreePage/TreePage';
import { Actions } from './Actions/Actions';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <TreePage />
        <Actions />
      </BrowserRouter>
    </>
  );
}
