import { useContext } from "react";
import { MyCitiesContext } from "../../../context/MyCitiesContext";
import { Card, Button } from "react-bootstrap";

function City({name}) {
    const {cities, addCity, removeCity} = useContext(MyCitiesContext)
    const inContext = cities.includes(name);

    const handleButton = () => {
        if (inContext) {
            removeCity(name)
        } else {
            addCity(name)
        }
    }

    return (
        <Card className="w-30">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant={inContext ? 'danger' : 'success'} onClick={handleButton}>
                    {inContext ? 'Eliminar de mis ciudades' : 'Añadir a mis ciudades'}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default City;