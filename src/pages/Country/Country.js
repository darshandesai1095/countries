import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BackButton from '../../components/BackButton/BackButton';
import CountryInfo from '../../components/CountryInfo/CountryInfo';

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
      <CountryInfo/>

    </div>
  );
}

export default Country;
