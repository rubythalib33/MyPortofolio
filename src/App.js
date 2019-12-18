import React from 'react';
import './App.css';
import {Layout, Header, Navigation,Drawer,Content} from "react-mdl";
import { relative } from 'path';
import Main from "./components/main";

function App() {
  return (
    <div style={{height:'300px', position:relative}}>
      <Layout style={{backgroundColor:"black"}}>
        <Header transparent title="My Portofolio" style={{color:'white'}}>
          <Navigation>
            <a href='/'>Home</a>
            <a href='/about-me'>About Me</a>
            <a href='/resume'>Resume</a>
            <a href='/contact'>Contact</a>
            <a href='/projects'>Projects</a>
          </Navigation>
        </Header>
        <Drawer title='Title'>
          <Navigation>
            <a href='/'>Home</a>
            <a href='/about-me'>About Me</a>
            <a href='/resume'>Resume</a>
            <a href='/contact'>Contact</a>
            <a href='/projects'>Projects</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>

    </div>
  );
}

export default App;
