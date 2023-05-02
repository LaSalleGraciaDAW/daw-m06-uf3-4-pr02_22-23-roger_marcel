import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MyCitiesProvider } from "./context/MyCitiesContext";
import NotFound from "./pages/NotFound";
import MyCityList from "./pages/MyCityList";
import CountryList from "./pages/CountryList";
import CityList from "./pages/CityList";
import 'bootstrap/dist/css/bootstrap.min.css';  

import Search from "./pages/CountryList/components/Search";

function App() {
  const [ countrySelected, setCountrySelected ] = useState(null);

  return (
    <>
    <MyCitiesProvider>
      <header>
        <h1>React Practise</h1>
        <nav>
        <ul>
          <li><Link to="/">My Cities</Link></li>
          <li><Link to="/countries">Search</Link></li>
        </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MyCityList />} />
          <Route path="/countries" element={ < Search />/*<CountryList {...{countrySelected, setCountrySelected}}/>*/}>
            <Route path=":countryId/cities" element={<CityList {...{countrySelected, setCountrySelected}}/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </MyCitiesProvider>
    </>
  );
}

export default App;
