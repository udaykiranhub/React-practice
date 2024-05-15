import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import i18n from './i18n'; // Import your i18n instance

import Login from "./pages/login.js";
import Home from "./pages/home.js";
import FavoriteColor from './App.js';
import Component  from './component.js';
import GetData from './pages/data.js';
import Dom from "./pages/dom.js";
import Provider  from './trail.js';
import LanguageSwitcher from './LanguageSwitcher.js';
import Parent  from './contextProvider.js';
import { Outlet, Link } from "react-router-dom";
import Cookie from './cookie.js';
import Testing from './test.js';
import Lang from "./useLang.js";

import Custom from './pages/customHook.js';

import Garage from './pops.js';
import GoogleApiWraper from "./map.js";
import UseContext from "./UseContext.js";
import Tilting from './tilt.js';
import Grid from './gird.js';

import Navbar from './toggle.js';

const Layout = () => {
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };
  return (
    <>
      <nav>
        <ul className='well'>
          <li>
            <Link to="/Home"><h1>{i18n.t("home")}</h1></Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Test">Test</Link>
          </li>
          <li>
            <Link to="/color">color</Link>
          </li>
          <li> <Link to="/getdata" > GetData</Link></li>
          <li>
          <Link to="/dom" >GetDom</Link>
        </li>
        <li>
        <Link to="/component">component</Link></li>
        <li>
          <Link to="/parent">Parent</Link>
        </li>
        <li>
          <Link to="/provider" >Provider</Link>
        </li>

        <li>
          <Link to="/cookie">Cookies</Link>
        </li>
        <li>
          <Link to="/testing">Testing</Link>
        </li>
        <li>
          <Link to="/lang">Language</Link>
        </li>
        <li>
          <Link to="/custom" >CustomHook</Link>
        </li>
        <Link to="/garage">garage</Link>
        <li>
          <Link to="/usecontext">usecontext</Link>
        </li>
        <li>
          <Link to="/map">map</Link>
        </li>
        <li>
          <Link to="/tilt">tilt</Link>
        </li>
        <li>
          <Link to="/grid">Grid</Link>
        </li>
        <li>
          <Link to="/nav">NavBar</Link>
        </li>
        </ul>

      </nav>

      <Outlet />
      <div className="App">
      <h1>{i18n.t('welcome_message')}</h1> 
      <h1>{i18n.t('contact')}</h1>{/* Use t for translation */}
      <h1>{i18n.t("home")}</h1>
      <LanguageSwitcher i18n={i18n} onLanguageChange={handleLanguageChange} />
      {/* Rest of your app content, use t('key') for translations */}
    </div>
    </>
  )
};



// Assuming a basic Test component (replace with your actual implementation)
function Test() {
  // You can use state or other hooks here if needed
  const obj={
    brand:"honda",
    color:"black"
  }
  return (
    <div>
       <Garage  prod={obj}/>
      <h1>This is the Test component</h1>
    </div>
  );
}

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="Home" element={<Home/>}/>
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Layout/>}/>
        <Route path="/color" element={<FavoriteColor/>}/>
        <Route path="/getdata" element={<GetData/>}/>
        <Route path="/dom" element={<Dom/>} />
        <Route path='/component' element={<Component/>}/>
        <Route path="/parent" element={<Parent/>}/>
        <Route path="/provider" element={<Provider/>}/>
        <Route path="/cookie" element={<Cookie/>}/>
        <Route path="/testing" element={<Testing/>}/>
      <Route path="/lang" element={<Lang/>}/>
      <Route path="/custom" element={<Custom/>}/>
      <Route path="/garage" element={<Garage/>}/>
      <Route path="/usecontext" element={<UseContext/>}/>
      <Route path="/map" element={<GoogleApiWraper/>}/>
      <Route path="/tilt" element={<Tilting/>}/>
      <Route path="/grid" element={<Grid/>}/>
      <Route path="/nav" element={<Navbar/>}/>
        </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
