import React from "react";
import { Box } from "@material-ui/core";
//this is use to route like localhost:3000/details
import {BrowserRouter , Switch , Route } from 'react-router-dom' 

//Import self made components
import Header from "./compoents/Header";
import Home from "./compoents/Home/Home";
import DetailView from "./compoents/post/DetailView";
import CreateView from "./compoents/post/CreateView";
import UpdateView from "./compoents/post/UpdateView";

function App() {
  return (
    // because we cannot return multiple parent elements so we use this 
    // you can also use div but it will appear in the DOM file in browser
    <BrowserRouter>
    <Header />
    <Box style={{marginTop:64}}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/details'component={DetailView} />
        <Route exact path='/create' component={CreateView}/>
        <Route exact path='/update' component={UpdateView}/>
      </Switch>
    </Box>
    </BrowserRouter>
    
  );
}

export default App;
