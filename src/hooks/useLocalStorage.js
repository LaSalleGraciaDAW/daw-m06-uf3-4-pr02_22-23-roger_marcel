import { useState, useEffect } from 'react';

function useLocalStorage(clave, valorInicial) {
    let guardado;

    try {
        guardado = JSON.parse(localStorage.getItem(clave));
    } catch (error) {
        guardado = null;
    }

    const [value, setValue] = useState(Array.isArray(guardado) ? guardado : valorInicial);

    useEffect(() => {
        localStorage.setItem(clave, JSON.stringify(value));
    }, [value, clave]);

    return [value, setValue];
}

export default useLocalStorage;