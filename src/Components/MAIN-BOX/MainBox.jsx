import React, { useState } from 'react'
import DropDown from './DropDown'
import { TbHandClick } from "react-icons/tb"
import Input from './Input'
import ItemInfo from './ItemInfo'

const style = {
    height: "2.2rem",
    width: "13rem",
    outline: "none",
}

const MainBox = () => {
    const [tab, setTab] = useState(true);
    const [header,setHeader] = useState("Lost");
    const [index,setIndex] = useState(0);

    const ToggleLostHeader = ()=>{
        setTab(false);
        setHeader("Lost");
        setIndex(1);
    }
    const ToggleFoundHeader = ()=>{
        setTab(false);
        setHeader("Found");
        setIndex(2);
    }

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
                        <ItemInfo />
                        <ItemInfo />
                        <ItemInfo />
                        <ItemInfo />
                        <ItemInfo />
                        <ItemInfo />
                    </div>
                </div>
                <aside className="action-area">
                    <div className="action-tabs">
                        <div className={`lost-tab ${index === 1 ? "active" : ""}`} onClick={()=>ToggleLostHeader()}>
                            Lost
                        </div>
                        <div className={`found-tab ${index === 2 ? "active" : ""}`} onClick={()=>ToggleFoundHeader()}>
                            Found
                        </div>
                    </div>
                    <div className="action-inputs">
                        {tab ?
                            <div className="action-default">
                                <TbHandClick />
                                <p> Click on either "Lost" or "Found" to get started</p>
                            </div>
                            : <Input header = {header} />
                        }
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default MainBox
