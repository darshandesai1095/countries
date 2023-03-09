import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setEndpoint } from '../../redux/features/endpointSlice'
import { Link } from "react-router-dom";

function BackButton() {

  const dispatch = useDispatch()

  return (
    <div onClick={()=>dispatch(setEndpoint('all'))}>
      <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
        <button>
          Back
        </button>
      </Link>
    </div>

  );
}

export default BackButton;
