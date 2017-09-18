import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function LocationCard({location, deleteLocation}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='home'/> {location.name}
                </Card.Header>
                <Card.Description>
                    <p> Temperature: {location.weatherCondition.temperature}</p>
                    <p> Conditions: {location.weatherCondition.text}</p>
                    <p> Last Update: {longToDate(location.weatherCondition.conditionDate)}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={`/locations/edit/${location.id}`} className="ui basic button green">Edit</Link>
                    <Button basic color="red" onClick={() => deleteLocation(location.id)} >Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}


var longToDate = function(millisec) {
    return (new Date(millisec).toUTCString());
}
LocationCard.propTypes = {
    location: React.PropTypes.object.isRequired
}