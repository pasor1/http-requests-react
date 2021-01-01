import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StyleChecker from '../../components/StyleChecker/StyleChecker';


const layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
      <StyleChecker />
    </>
  )
}

export default layout