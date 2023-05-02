import { createContext, useState, useEffect } from "react";

export const MyCitiesContext = createContext({});

export function MyCitiesProvider({ children }) {
    const [cities, setCities] = useState([]);

  // Añadir una ciudad al contexto
    const addCity = (city) => {
        setCities((prevCities) => [...prevCities, city]);
    };

  // Eliminar una ciudad del contexto
    const removeCity = (city) => {
        setCities((prevCities) => prevCities.filter((c) => c !== city));
    };

    const context = {
        cities,
        addCity,
        removeCity,
    };

    // Actualizar el almacenamiento local cuando cambie el contexto
    useEffect(() => {
        localStorage.setItem("myCities", JSON.stringify({ cities }));
    }, [cities]);

    return (
        <MyCitiesContext.Provider value={context}>
            {children}
        </MyCitiesContext.Provider>
    );
}
