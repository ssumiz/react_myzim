import React from 'react';
import ReactDOM from 'react-dom/client';

// React-Router-Dom
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// CSS
import './css/index.css';


import 'bootstrap/dist/css/bootstrap.min.css';

// Component
import Head from './component/Head';
import Main from './component/Main';
import Footer from './component/Footer';
import Login from './component/sj_component/Login'

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

  <BrowserRouter>

    <Head Data={Data}></Head>

    {/* <Main datasrc={data}></Main> */}
    <Routes>
      <Route path="/" element={<Main Data={Data}></Main>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>

    <Footer Data={Data}></Footer>

  </BrowserRouter>
);


