import React from 'react';
import Main from './Main';
import ReactDOM from 'react-dom/client';
import Registered from './Registered';
import HashPassword_login from './HashPassword_login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

<Main/>
{/* <BrowserRouter>
//<Routes
>
  <Route path='/'element={<Registered/>}></Route>
  <Route path='/login' element={<HashPassword_login/>}></Route>
</Routes>
</BrowserRouter> */}
</>
  );

