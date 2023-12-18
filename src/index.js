import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// Component
import Head from './component/Head';
import Main from './component/Main';
import Footer from './component/Footer';

// Data
import data from './data/data.json'
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

  <>

    <Head Data={Data}></Head>

    <Main datasrc={data}></Main>
    {/* <Main Data={Data}></Main> */}

    <Footer Data={Data}></Footer>

  </>
);


