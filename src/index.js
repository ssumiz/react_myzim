import React from 'react';
import ReactDOM from 'react-dom/client';

// Lib
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/fonts/bootstrap-icons.min.css'

// Component
import Head from './component/Head';
import Main from './component/Main';
import Footer from './component/Footer';

// Data
import Data from './data/data.json'

// SCSS
import './sass/sj.module.scss';
import './sass/yn.module.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>

    <Head Data={Data}></Head>

    <Main Data={Data}></Main>

    <Footer Data={Data}></Footer>

  </>
);


