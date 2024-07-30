import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './Component/MenuBar';
import Home from './Component/Home';
import Products from './Component/Products';
import DashBoard from './Component/DashBoard';
import Producted from './Component/Producted';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
  };

  return (
    <BrowserRouter>
      <div>
        <MenuBar isSignedIn={isSignedIn} />
        <Routes>
          <Route 
          path='/' 
          element={<Home />

          } />
          <Route 
          path='/product'
           element={
            <Producted isSignedIn={isSignedIn}>

           <Products/>
          </Producted>

           } />
          <Route 
          path='/dashboard' 
          element={
            <Producted isSignedIn={isSignedIn}>
          <DashBoard />
          </Producted>
        }
           />
        </Routes>
        <div>
          {isSignedIn ? (
            <button onClick={signout}>Sign out</button>
          ) : (
            <button onClick={signin}>Sign in</button>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}
