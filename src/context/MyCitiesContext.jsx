import { createContext, useState, useEffect } from "react";
import useLocalStorage from '../hooks/useLocalStorage';


export const MyCitiesContext = createContext({});

export function MyCitiesProvider({ children }) {
    const [cities, setCities] = useLocalStorage("myCities", []);

    const addCity = (city) => {
        setCities((prevCities) => [...prevCities, city]);
    };

    const removeCity = (city) => {
        setCities((prevCities) => prevCities.filter((c) => c !== city));
    };

    const context = {
        cities,
        addCity,
        removeCity,
    };

    return (
        <MyCitiesContext.Provider value={context}>
            {children}
        </MyCitiesContext.Provider>
    );
}
