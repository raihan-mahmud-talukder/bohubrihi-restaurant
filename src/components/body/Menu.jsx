import { useState } from "react"
import { DISHES } from "../data/dishes"
import { MenuItem } from "./MenuItem"

export const Menu = () => {
    const [dishes] = useState(DISHES)
    const menu = dishes.map(dish => {
        return <MenuItem key = {dish.id} dish = {dish}/>
    })
    return (
        <div className="container">
        <div className="row">
            <div className="col-5">
                {menu}
            </div>
        </div>
    </div>
    )
}