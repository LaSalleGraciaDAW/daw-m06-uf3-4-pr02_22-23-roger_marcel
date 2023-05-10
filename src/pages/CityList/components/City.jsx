import { useContext } from "react";
import { MyCitiesContext } from "../../../context/MyCitiesContext";
import { Card, Button } from "react-bootstrap";

function City({city}) {
    const {cities, addCity, removeCity} = useContext(MyCitiesContext);
    const inContext = cities.some(c => c.id === city.id);

    const handleButton = () => {
        if (inContext) {
            removeCity(city)
        } else {
            addCity(city)
        }
    }

    return (
        <Card className="w-30">
            <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Button variant={inContext ? 'danger' : 'success'} onClick={handleButton}>
                    {inContext ? 'Eliminar de mis ciudades' : 'Añadir a mis ciudades'}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default City;