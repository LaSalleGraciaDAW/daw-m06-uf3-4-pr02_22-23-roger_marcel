import {useState, useEffect} from 'react';

function Search () {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState(
        []
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            if (countries) {
                fetch('/db/countries.json')
                    .then((response) => response.json())
                    .then((data) => {
                        const filteredCountries = data.filter((country) => {
                            return country.name.toLowerCase().includes(search.toLowerCase());
                        })
                        setCountries(filteredCountries);
                    })
            }
        }, 500)
        return () => {
            console.log('use Effect clean');
            clearTimeout(timer)
        }
    }, [search])

    return (
        <div>
            <h1>
                SEARCH THE COUNTRY
            </h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {countries.map((country) => (
                    <a href={`/countries/${country.id}/cities`}>
                        <li key={country.name}>
                            {country.name}
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default Search;