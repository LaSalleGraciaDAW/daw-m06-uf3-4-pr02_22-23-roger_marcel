import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import City from "./components/City";

function CityList({countrySelected, setCountrySelected}) {
    const {countryId} = useParams();

    const [searchValue, setSearchValue] = useState();
    const [cities, setCities] = useState([]);
    const [citiesFilterd, setCitiesFilterd] = useState([])
    const data = useFetch("http://localhost:3000/db/cities.json");

    useEffect(() => {
        if (data.response && !data.error) {
            const filteredCities = data.response.filter(city => city.country_id == countryId);
            console.log(filteredCities)
            setCities(filteredCities);
            setCitiesFilterd(cities);
        }
    }, [data, countryId]);

    useEffect(() => {
        console.log(cities);
        setCitiesFilterd(cities)
        const timer = setTimeout(() => {
            if (searchValue) {
                setCitiesFilterd((prevCities) => prevCities.filter(cities => cities.name.toLowerCase().includes(searchValue)))
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [searchValue]);

        return (
            <div>
                <h2>Search cities in {countrySelected}</h2>
                Buscar Ciutat: <input type="text" onChange={(e) => setSearchValue(e.target.value)}></input>
                {citiesFilterd ? citiesFilterd.map((city) => (
                    <City key={city.id} city={city} />
                )) : <p>No cities</p>}
            </div>
        );
}

export default CityList;