import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FullReview from "./components/FullReview";
import Home from "./components/Home";
import Login from "./components/Login";
import Reviews from "./components/Reviews";

function App() {
  return (
    <main className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/reviews/:review_id" element={<FullReview />}></Route>
        <Route
          path="/reviews/categories/:category_name"
          element={<Reviews />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </main>
  );
}

export default App;
