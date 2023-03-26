import React from 'react'
import DropDown from './DropDown'
const style = {
    height: "2.2rem",
    width: "13rem",
    outline: "none",
}

const MainBox = () => {
    return (
        <main className="main-box">
            <div className="main-content">
                <div className="product-details">
                    <div className="product-filters">
                        <DropDown
                            id="Second"
                            feild="All"
                            feild2="Lost"
                            feild3="Found"
                            condition={true}
                        />
                        <DropDown
                            id="first"
                            feild="All Time"
                            feild2="Last 1 day(today)"
                            feild3="Last 2 day"
                            feild4="Last 3 day"
                            condition={false}

                        />
                        <select style={style} name="" id="third">
                            <option value="All Category">All Category</option>
                            <option value="general">General</option>
                            <option value="clothing">Clothing</option>
                            <option value="electronics">Electronics</option>
                            <option value="money">Money</option>
                            <option value="smartphones">Smartphone</option>
                            <option value="document">Document</option>
                        </select>

                        <button className="filter-btn">
                            Lock Filters
                        </button>
                    </div>
                    <div className="product-description">
                        Desc
                    </div>
                </div>
                <aside className="action-area">
                    <div className="action-btn">
                        Buttons
                    </div>
                    <div className="action-inputs">
                        Inputs
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default MainBox
