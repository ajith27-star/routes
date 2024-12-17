import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import As from './As';
import Education from './Education';
import Skill from './Skill';
import Contact from './Contact';
import Navigation from './Navigation';
import Problem from './Problem';
import Problem2 from './Problem2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<Navigation/>} /> 
      <Route path="/As"element={<As/>} /> 
      <Route path="/Education"element={<Education/>} />
      <Route path="/Skill"element={<Skill/>} />  
      <Route path="/Contact"element={<Contact/>} /> 
      <Route path="/Problem"element={<Problem/>} /> 
      <Route path="/Problem2"element={<Problem2/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
