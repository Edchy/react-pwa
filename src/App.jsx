import BeerList from "./components/BeerList";
import BeerDetails from "./components/BeerDetails";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <main className="bg-neutral-950 h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<BeerList />} />
            <Route path="/beers/:id" element={<BeerDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
