import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import "./App.css";
import Blogs from "./pages/Blogs/Blogs";
import Login from "./pages/Login/Login/Login";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
