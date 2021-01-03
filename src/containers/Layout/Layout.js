import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BaseStylePanorama from '../../components/BaseStylePanorama/BaseStylePanorama';


const layout = (props) => {
  return (
    <>
      <Header />
      <div className="main-content max-w-screen-lg mx-auto px-5">
        {props.children}
      </div>
      <Footer />
      {/* <BaseStylePanorama /> */}
    </>
  )
}

export default layout