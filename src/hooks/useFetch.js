import { useState, useEffect } from "react";

function useFetch(url) {
    const [state, setState] = useState({response: null, error: true});

    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setState({response: data, error: false});
            }
        }

        getData();
    }, [url]);

    return state;
}

export default useFetch;