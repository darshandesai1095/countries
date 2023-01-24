import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BackButton from './components/BackButton.js'

function Country() {
  
  const theme = useSelector((state) => state.theme.value)
  const bkgStyle = {
    darkMode: {
        backgroundColor: '#324554',
    },
    lightMode: {
        backgroundColor: '#f8f9fa',
    }
}

  return (
    <div  className="Country"
          style={theme.darkTheme ? bkgStyle.lightMode : bkgStyle.darkMode}>

      <BackButton/>
      <Country/>

    </div>
  );
}

export default Country;
