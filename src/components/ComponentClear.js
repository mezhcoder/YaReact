import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

function ComponentClear() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "CLEAR_DATA"})
    }, [dispatch])
    let history = useHistory();
    history.push("/settings");

   return (<></>);
}

export default ComponentClear;