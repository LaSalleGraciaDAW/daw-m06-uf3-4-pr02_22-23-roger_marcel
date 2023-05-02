import { useState, useEffect } from "react";

function useFetch(url) {
    const [state, setState] = useState({ isLoading: true, response: null });

    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            if (response.ok) {
                console.log(url);
                const data = await response.json();
                setState({ isLoading: false, response: data });
            }
        }

        getData();
    }, [url]);

    return state;
}

export default useFetch;