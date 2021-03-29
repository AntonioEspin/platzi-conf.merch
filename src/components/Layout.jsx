import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

const Layout = ({children}) => {
  return (
    <main className="Main">
      <Header/>
        {children}
      <Footer/>
    </main>
  )
}

export default Layout;