import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import FullReview from "./components/FullReview";

function App() {
  return (
    <main className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Reviews />}></Route>
        <Route path="/reviews/:review_id" element={<FullReview />}></Route>
      </Routes>
    </main>
  );
}

export default App;
