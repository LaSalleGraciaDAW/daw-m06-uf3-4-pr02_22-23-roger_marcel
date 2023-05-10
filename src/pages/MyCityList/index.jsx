import { useContext, useEffect } from "react";
import { MyCitiesContext } from "../../context/MyCitiesContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { STORAGE } from "../../config/vars";

function MyCityList () {
  const { cities, removeCity } = useContext(MyCitiesContext);
  // const [ myCitiesSaved ] = useLocalStorage(STORAGE.KEY, STORAGE.INITIAL_VALUE);

  // useEffect(() => {
  //   if (myCitiesSaved && myCitiesSaved.length > 0) setMyCities(myCitiesSaved);
  // }, [myCitiesSaved]);
  console.log(cities)

  const removeCityFromContext = (city) => removeCity(city);
  const round = (value, decimals) => Number(Math.round(value+'e'+decimals)+'e-'+decimals);

  return (
    <div>
      <h1>My Cities</h1>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <div><strong>{city.name}</strong></div>
            <div>State: {city.state_name}</div>
            <div>Country: {city.country_name}</div>
            <div>Coordinates: {round(city.latitude, 5)}, {round(city.longitude, 5)}</div>
            <button onClick={() => removeCityFromContext(city)}>Remove</button> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyCityList;