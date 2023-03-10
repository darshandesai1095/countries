import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setEndpoint } from '../../redux/features/endpointSlice'
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "./BackButton.css"
import { Scale } from '@mui/icons-material';

function BackButton() {

  const endpoint = useSelector(state => state.endpoint.value)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
    dispatch(setEndpoint('all'))
  }

  const theme = useSelector((state) => state.theme.value)

  const buttonStyle = {
    light: {
        backgroundColor: 'white',
        boxShadow:'0px 0px 10px #dee2e6',
        color: '#495057',
        border: '1px solid white'

    },

    dark: {
        backgroundColor: '#435567',
        boxShadow:'0px 0px 10px #253747',
        color: 'white',
        border: '1px solid #435567'
    }
}

  return (
    <div onClick={()=>goBack()}>
      {/* <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}> */}
        <button className="back-button" style={theme.darkTheme? buttonStyle.light : buttonStyle.dark}>
          <ArrowBackIcon style={{transform:"Scale(0.7)"}}/>
          {/* <span>&#8592;</span> */}
          <span>Back</span>
        </button>
      {/* </Link> */}
    </div>

  );
}

export default BackButton;
