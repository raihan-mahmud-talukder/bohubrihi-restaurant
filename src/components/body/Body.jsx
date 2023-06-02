import { Route, Routes } from "react-router-dom"
import { About } from "./About"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { Menu } from "./Menu"

export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
    }