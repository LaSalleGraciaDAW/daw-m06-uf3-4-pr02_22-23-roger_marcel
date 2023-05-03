import {useState, useEffect} from 'react';
import { Link, useOutlet } from 'react-router-dom';

function Search ({setCountrySelected}) {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState(
        []
    );
    const outlet = useOutlet();

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
            } else {
                setCountries([]);
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
                { search === '' ? null :
                countries.map((country) => (
                    // <a href={`/countries/${country.id}/cities`}>
                    //     <li key={country.id}>
                    //         {country.name}
                    //         {country.emoji}
                    //     </li>
                    // </a>
                    <Link key={country.id} onClick={() => setCountrySelected(country.name)} to={`${country.id}/cities`}>
                        {country.name}
                    </Link>
                ))}
            </ul>
            {outlet || <p>Please select a country.</p>}
        </div>
    )
}

export default Search;