import { useEffect,useRef, useState } from 'react'

function UseRef() {

    const [incomeTax,setIncomeTax] = useState(2000)

    const divRef = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            console.log(divRef.current)
            divRef.current.innerHTML = 10;
        },5000)
    },[])


  return (
    <div>
    hi there is your income tax return <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default UseRef