import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import LocationList from "../location/LocationList";




export default function BoardCard({board, loading, errors, deleteLocation, deleteBoard}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='home'/> {board.name.toString()}
                </Card.Header>
                <LocationList locations={board.locations} inBoard={true} loading={loading} errors={errors} deleteLocation={deleteLocation}/>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={`/board/edit/${board.id}`} className="ui basic button green">Edit Name</Link>
                    <Button basic color="red" onClick={() => deleteBoard(board.id)} >Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

BoardCard.propTypes = {
    board: React.PropTypes.object.isRequired
}