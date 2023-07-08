import React, { useState } from 'react'
import Input from "../childComponents/Input"
import ButtonManish from "../childComponents/ButtonManish"
const Details = () => {
    const [data, setData] = useState({ fn: "" })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        console.log("data", data)
    }
    // mostly use javascript








    return (
        <React.Fragment>
            {/* <Input
                type="text"
                name="fn"
                value={data.fn}
                onChange={handleChange} />

            <ButtonManish onClick={handleClick} className="ml-3 btn btn-primary btn-sm"> add </ButtonManish> */}

        </React.Fragment>
    )
}

export default Details
