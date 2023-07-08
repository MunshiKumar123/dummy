import React, { useEffect, useState } from 'react'

function Child({ getData, x }) {
    useEffect(() => {
        let arr1 = [
            { name: "manish", age: 25 },
            { name: "raj", age: 23 },
            { name: "ramesh", age: 21 },
        ];
        getData(arr1)
    }, [])



    return (
        <div>
            <h1>Child Component {x}</h1>

        </div>
    )
}

export default Child
