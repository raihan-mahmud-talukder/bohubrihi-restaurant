import { Body } from "./body/Body"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

export const MainComponent = () => {
    return (
        <>
        <h1>Main Component</h1>
        <Header />
        <Body />
        <Footer />
        </>
    )
}