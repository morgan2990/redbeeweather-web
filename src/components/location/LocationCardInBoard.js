import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function LocationCardInBoard({location, deleteLocation}) {
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
                <div className="ui one button">
                    <Button basic color="red" onClick={() => deleteLocation(location.id)} >Remove From Board</Button>
                </div>
            </Card.Content>
        </Card>
    )
}


var longToDate = function(millisec) {
    return (new Date(millisec).toUTCString());
}
LocationCardInBoard.propTypes = {
    location: React.PropTypes.object.isRequired
}