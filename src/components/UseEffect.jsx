import { useEffect, useState } from "react";

function UseEffect() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("re-renders")

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);
  // fetch("https://google.com",async function(res){
  //     const json = await res.json();
  //     setBankData({income:100})
  //     //assume its income {income:100}
  // });

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100,
      });
    }, 1000);
  }, []);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
  return <div>hi there is your income tax returns {incomeTax}</div>;
}

export default UseEffect;
