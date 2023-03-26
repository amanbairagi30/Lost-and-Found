import React from 'react'

const style = {
    height: "2.2rem",
    width: "13rem",
    outline: "none",
}

const DropDown = ({id,feild,feild2,feild3,feild4,condition}) => {
    return (
        <>
            <select style={style} name="" id={id}>
                <option value={feild}>{feild}</option>
                <option value={feild2}>{feild2}</option>
                <option value={feild3}>{feild3}</option>
                <option hidden={condition} value={feild4}>{feild4}</option>
            </select>
        </>
    )
}

export default DropDown
