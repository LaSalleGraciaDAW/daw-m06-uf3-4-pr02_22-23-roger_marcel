import { useParams } from "react-router-dom";

function CityList({countrySelected, setCountrySelected}) {
    const {countryId} = useParams();

        return (
            <div>
                <h2>Search cities in {countrySelected}</h2>
            </div>
        );
}

export default CityList;