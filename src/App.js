import React from "react"
import { Food } from "./commponents/Food"
import { HeadLineCard } from "./commponents/HeadLineCard"
import { Hero } from "./commponents/Hero"
import NavBar from "./commponents/NavBar"
import Categories from "./commponents/Categories"


function App() {
  return (
    <div className="
    ">
    <NavBar/>
    <Hero/>
    <HeadLineCard/>
    <Food/>
    <Categories/>
    </div>
  )
}
export default App
