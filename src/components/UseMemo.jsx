import { useEffect, useMemo, useState } from "react";

function UseMemo() {
  const [exchangeData1, setExchangeData1] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("re-renders");

  useEffect(() => {
    setExchangeData1({ returns: 100 });
  }, []);

  useEffect(() => {
    setExchangeData2({
      returns: 100,
    });
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
        setBankData({
            income:100
        },5000)
    })
  },[])

  
  const cryptoReturns = useMemo(function(){
    console.log("hi there before!")
    return exchangeData1.returns + exchangeData2.returns; 
  },[exchangeData1,exchangeData2])

  const incomeTax = (cryptoReturns + bankData.income)* 0.3;

  return(
    <div>
    hi there is your income tax returns {incomeTax}
    </div>
  )
}

export default UseMemo;
