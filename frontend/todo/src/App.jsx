import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Task from './components/pages/task';
import Home from './components/pages/home';
import Nav from './components/nav';
import About from './components/pages/about';

function App () {
  return (
   <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={"page  not found"}/>
      </Routes>
   </BrowserRouter>
  );
};

export default App;
