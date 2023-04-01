import React from 'react'
// import DropDown from './DropDown'

const style = {
  padding: "0.8rem",
  margin: "0.5rem 0",
  width: "100%",
  outline: "none",
}

const Input = ({ header }) => {
  return (
    <>
      <form action="" className="action-form">
        {/* These are some of the inputs */}
        <input type="text" placeholder={`${header} Item`} />
        <input type="text" placeholder={`${header} Item description`} />
        <input type="text" placeholder={`Place`} />
        <input type="text" placeholder={`Google drive link`} />
        <input type="date" placeholder={`Google drive link`} />
        <input type="tel" placeholder={`Contact No.(Will not be disclosed)`} />
        <select style={style} name="" id="third">
          <option value="All Category">All Category</option>
          <option value="general">General</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="money">Money</option>
          <option value="smartphones">Smartphone</option>
          <option value="document">Document</option>
        </select>

        {/* In this We have used ternary operator to handle the colors of btns of lost and found */}
        <div className={header=== "Lost" ? "action-lostbtn" : "action-foundbtn" }>
          <button>Add {header} Item</button>
        </div>
      </form>
    </>
  )
}

export default Input
