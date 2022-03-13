import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, Profile, Order, Payment, Tv} from "./screens";


const App = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route path={"/"} element={<Home />} />
               <Route path={"/order"} element={<Order />}/>
               <Route path={"/profile"} element={<Profile />}/>
               <Route path={"/payment"} element={<Payment />}/>
               <Route path={'/tv'} element={<Tv />}/>
           </Routes>
       </BrowserRouter>
    );
};

export default App;