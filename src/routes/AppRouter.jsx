import { Route, Routes } from "react-router-dom"
import { AppIndex } from "../views/AppIndex"
import { StoreMain } from "../views/StoreMain"
import { StoreProduct } from "../views/StoreProduct"
import { AppNotFound } from "../views/AppNotFound"
import { StoreCart } from "../views/StoreCart"
import { StoreCategories } from "../views/StoreCategories"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path = "/" element = { <AppIndex /> } />
            <Route path = "store" >
              <Route index element = { <StoreMain /> } />
              <Route path = ":productID" element = { <StoreProduct /> } />
            </Route>
            <Route path = "cart" element = { <StoreCart /> } />
            <Route path = "categories" element = { <StoreCategories /> } />
            <Route path = '*' element = { <AppNotFound /> } />
        </Routes>
    </>
  )
}
