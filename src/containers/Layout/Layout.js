import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const layout = (props) => {
  return (
    <>
      <Header />
      <div className="main-content max-w-screen-xl mx-auto px-5 pt-36">
        {props.children}
      </div>
      <Footer />
      {/* <BaseStylePanorama /> */}
    </>
  )
}

export default layout