import { BrowserRouter } from "react-router-dom"
import { MainComponent } from "./components/MainComponent"

export const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  )
}