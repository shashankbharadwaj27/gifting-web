// import { useState } from 'react'
// import './index.css';
// import ClockPage from './pages/ClockPage';
// import LandingPage from './pages/LandingPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <>
//        <BrowserRouter>
//        <Routes>
//         <Route path='/' element={<LandingPage/>}></Route>
//         <Route path='/products/clocks' element={<ClockPage/>}></Route>
//        </Routes>
//        </BrowserRouter>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
// import CategoryPage from './pages/CategoryPage';
import ClockPage from './pages/ClockPage'; 
import ClockEditor from './components/ClockEditor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClockPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/products/clocks" element={<ClockPage />} /> */}
        <Route path="/products/editor/:clockId" element={<ClockEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

