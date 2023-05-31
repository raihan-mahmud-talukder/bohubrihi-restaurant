import { useState } from "react"
import { DISHES } from "../../data/dishes"
import { DishDetail } from "./DishDetail"
import { MenuItem } from "./MenuItem"

export const Menu = () => {
    const [dishes] = useState(DISHES)
    const [selectedDish, setSelectedDish] = useState(null)
    const onSelecdDish = dish => setSelectedDish(dish)
    const menu = dishes.map(dish => {
        return <MenuItem
        key = {dish.id}
        dish = {dish}
        onSelectDish = {onSelecdDish} />
    })
    const dishDetail = selectedDish ? <DishDetail dish = {selectedDish} /> : null
    return (
        <div className="container">
        <div className="row">
            <div className="col-5">{menu}</div>
            <div className="col-7">{dishDetail}</div>
        </div>
    </div>
    )
}