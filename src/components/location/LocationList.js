import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LocationCard from './LocationCard';
import LocationCardInBoard from './LocationCardInBoard';
import io from "socket.io-client";

const socket = io.connect("localhost:9092");
export default function LocationList({locations, inBoard, loading, errors, deleteLocation}){

    socket.on('weatherCondition', function(message){locations.map(location => location.id ===message["locationId"] ? {...location, weatherCondition:message["condition"]}: location);console.log (locations);console.log(message.locationId)});

    const loadingMessage = (
        <Message icon info>
            <Icon name='circle notched' loading />
            <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that content for you.
            </Message.Content>
        </Message>
    )

    const emptyMessage = (
        <Message icon info>
            <Icon name='warning circle' />
            <Message.Content>
                <Message.Header>No Locations Found</Message.Header>
                <p>Add some new locations to get started.</p>
                <Link to={'/locations/new'} className="ui button primary">Add New Location</Link>
            </Message.Content>
        </Message>
    )

    const timeoutMessage = (
        <Message icon negative>
            <Icon name='wait' />
            <Message.Content>
                <Message.Header>{errors.global}</Message.Header>
                Timed out while waiting for the locations.
            </Message.Content>
        </Message>
    )

    const cards = () => {
        if (inBoard){
        return locations.map(location => {
            return (
                <LocationCardInBoard key={location.id} location={location} deleteLocation={deleteLocation} />
            )
        })
        }else{
            return locations.map(location => {
                return (
                    <LocationCard key={location.id} location={location} deleteLocation={deleteLocation} />
                )
            })
        }
    }

    const locationList = (
        <Card.Group>
            { cards() }
        </Card.Group>
    )

    return (
        <div>
            { loading && loadingMessage }
            { locations.length === 0 && !loading  && !errors.global && emptyMessage }
            { errors.global && timeoutMessage }
            { locations.length > 0 && locationList }
        </div>
    )
}