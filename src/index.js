import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

// Component
import Head from './component/Head';
import Main from './component/Main';
import Footer from './component/Footer';

// Data
import Data from './data/data.json'

// SCSS
import './sass/sj/sj.module.scss';
import './sass/yn/yn.module.scss';
import cb from './sass/sj/sj.module.scss';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div >

    <Head Data={Data}></Head>

    <Main Data={Data}></Main>

    <Footer Data={Data}></Footer>

  </div>
);


