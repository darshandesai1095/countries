import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setEndpoint } from '../../redux/features/endpointSlice'
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function BackButton() {

  const endpoint = useSelector(state => state.endpoint.value)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
    dispatch(setEndpoint('all'))
  }

  return (
    <div onClick={()=>goBack()}>
      {/* <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}> */}
        <button>
          Back
        </button>
      {/* </Link> */}
    </div>

  );
}

export default BackButton;
