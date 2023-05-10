import {useState, useEffect} from 'react';
import { Link, useOutlet } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Country from './Country';

function Search ({setCountrySelected}) {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState(
        []
    );
    const outlet = useOutlet();
    const data = useFetch('/db/countries.json')

    useEffect(() => {
        
        const timer = setTimeout(() => {
            if (data.response && !data.error) {
                const filtredCities = data.response.filter((country) => {
                    return country.name.toLowerCase().includes(search.toLocaleLowerCase())
                })
                setCountries(filtredCities)
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
                    <li>
                        <Link key={country.id} onClick={() => setCountrySelected(country.name)} to={`${country.id}/cities`}>
                            <Country country={country} />
                        </Link>
                    </li>
                ))}
            </ul>
            {outlet || <p>Please select a country.</p>}
        </div>
    )
}

export default Search;