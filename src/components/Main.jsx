import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { makeRequest } from "../axios";
import Advice from "./Advice";

//https://api.adviceslip.com/advice

function Main() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  const getAdvice = () => {
    setLoading(true);
    makeRequest.get("/advice").then((res) => {
      setAdvice(res.data.slip);
      console.log('api', res.data.slip);
      console.log(advice);
      setLoading(false);
    });
  };
  const handleClick = () => {
    setLoading(true);

    makeRequest.get("/advice").then((res) => {
      setAdvice(res.data.slip);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAdvice();
  },[]);

  return (
    <div className="Main">
       {loading ? (
        <h1>loading ...</h1>
      ) : (
        <AnimatePresence>
        <Advice advice={advice} click={handleClick} />
      </AnimatePresence>
      )} 
   
    </div>
  );
}

export default Main;
