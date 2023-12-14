import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Link } from "react-router-dom";

// CSS
import './css/index.css';

import './sass/jh.module.scss';
import './sass/sj.module.scss';
import './sass/yn.module.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/fonts/bootstrap-icons.min.css'

// Component
import Head from './component/Head';
import Main from './component/Main';
import Footer from './component/Footer';

// Data
import data from './data/data.json'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>

    <Head></Head>

    <Main></Main>

    <Footer></Footer>

  </>
);


