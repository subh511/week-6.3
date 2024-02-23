
import React, { useState } from 'react'

function UseEffect() {

    const [exchangeData,setExchangeData] = useState({});
    const [bankData,setBankData] = useState({})

    fetch("https://google.com",async function(res){
        const json = await res.json();
        setBankData(json)
        //assume its income {income:100}
    });

    setTimeout(()=>{
        setExchangeData({
            returns:100
        })
    },1000)

    const incomeTax = (bankData.income + exchangeData) * 0.3
  return (
    <div>
    hi there is your income tax returns {incomeTax}
    </div>
  )
}

export default UseEffect