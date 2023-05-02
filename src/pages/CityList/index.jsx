import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import City from "./components/City";

function CityList({countrySelected, setCountrySelected}) {
    const {countryId} = useParams();

    const fetchedCities = useFetch("http://localhost:3000/db/cities.json");

    const [cities, setCities] = useState(...fetchedCities);
    const [searchValue, setSearchValue] = useState();


    useEffect(() => {    
        setCities((prevCities) => prevCities.filter(city => city.country_id === countryId));
    }, [countryId]);
    

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchValue) {
                setCities((prevCities) => prevCities.filter(cities => cities.nombre.includes(searchValue)))
            }
        }, 500);

        return () => {
            console.log('Effect cleanup!');
            clearTimeout(timer);
        };
    }, [searchValue]);

        return (
            <div>
                <h2>Search cities in {countrySelected}</h2>
                Buscar Ciutat: <input type="text" onChange={(e) => setSearchValue(e.target.value)}></input>
                {cities.map((city) => (
                    <City key={city.id} name={city.name} />
                ))}
            </div>
        );
}

export default CityList;