import React, { useState } from 'react'
import Child from "./Child"
function Parrents() {

    const [data, setData] = useState()

    const getData = (x) => {
        setData(x)
    }

    console.log("data", data)
    let x = 10;

    return (
        <div>
            <h1>Parrents</h1>
            <Child getData={getData} x={x} />
        </div>
    )
}

export default Parrents
