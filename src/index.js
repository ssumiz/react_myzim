import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './css/index.css';

import jhStyle from "./sass/jh.module.scss";
import './sass/sj.module.scss';
import './sass/yn.module.scss';


import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/fonts/bootstrap-icons.min.css'

// Component
import Head from './component/Head';
import Main from './component/Main';
import Footer from './component/Footer';

// Data
import Data from './data/data.json'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>

    <Head Data={Data}></Head>

    <h2 id={jhStyle.h2}>sdfsdfdf</h2>

    <Main Data={Data}></Main>

    <Footer Data={Data}></Footer>

  </>
);


