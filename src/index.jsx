import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './components/HomePage';
import About from './components/AboutPage';
import Vans from './components/VansPage';
import DetailVan from './components/DetailVanPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vans' element={<Vans/>}/>
        <Route path='/vans/detail' element={<DetailVan/>}/>
        {/* <Route path='/vans/detail' component={()=> <DetailVan vanData = {this}/>}/> */}

        {/* <Route path="/" component={() => <Search name={this.props.name} />} />  */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
