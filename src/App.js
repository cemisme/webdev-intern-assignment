import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { Cart } from "./conponent/Shoes";
import { useContext } from "react";
function App() {
  const data = useContext(Cart);
  console.log(data)
  
  return (
    <Routes>
      <Route element={<Main></Main>}>
        <Route
          path="/"
          element={
            <>
              <HomePage></HomePage>
            </>
          }
        ></Route>
        <Route path="/mycart" element={<CartPage></CartPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
