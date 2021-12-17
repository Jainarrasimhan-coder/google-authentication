  import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
import getPosts from './actions/posts';
import {useDispatch} from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  const [currentId, setCurrentId] = useState(0);
  const classes= useStyles()

  const dispatch= useDispatch();

  useEffect(()=>{
dispatch(getPosts())
  },[currentId,dispatch])
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>

    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
