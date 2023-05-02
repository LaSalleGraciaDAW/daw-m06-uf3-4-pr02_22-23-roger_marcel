import { useContext } from "react";
import { MyCitiesProvider } from "../../../context/MyCitiesContext";
import { Card, Button } from "react-bootstrap";

function City({name}) {
    const {cities, addCity, removeCity} = useContext(MyCitiesProvider)
    const inContext = cities.includes(name);

    const handleButton = () => {
        if (inContext) {
            removeCity(name)
        } else {
            addCity(name)
        }
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant={inContext ? 'danger' : 'success'} onClick={handleButton}>
                    {inContext ? 'Eliminar del contexto' : 'Añadir al contexto'}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default City;