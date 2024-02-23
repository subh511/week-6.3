import { useEffect,useRef } from 'react'

function UseRef() {

    const divRef = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHtml = "10"
        },5000)
    },[])

    let incomeTax = 3000;

  return (
    <div>
    hi there is your income tax return <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default UseRef