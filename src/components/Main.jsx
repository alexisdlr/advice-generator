import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
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
        <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = 'hsl(150, 55%, 53%) '
        barColor = '#fff'
      />
      ) : (
        <AnimatePresence>
        <Advice advice={advice} click={handleClick} />
      </AnimatePresence>
      )} 
   
    </div>
  );
}

export default Main;
