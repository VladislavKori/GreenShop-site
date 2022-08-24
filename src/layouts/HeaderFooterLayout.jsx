// Libs
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Components
import { Header, Footer } from '../components/imports';

function HeaderFooterLayout({ children }) {
    
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HeaderFooterLayout;
