import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BoardCard from './BoardCardList';

export default function BoardList({boards, loading, errors, deleteBoard}){

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
                <Message.Header>No Boards Found</Message.Header>
                <p>Add some new boards to get started.</p>
                <Link to={'/boards/new'} className="ui button primary">Add New Board</Link>
            </Message.Content>
        </Message>
    )

    const timeoutMessage = (
        <Message icon negative>
            <Icon name='wait' />
            <Message.Content>
                <Message.Header>{errors.global}</Message.Header>
                Timed out while waiting for the boards.
            </Message.Content>
        </Message>
    )

    const cards = () => {
        return boards.map(board => {
            return (
                <BoardCard key={board.id} board={board} deleteBoard={deleteBoard} />
            )
        })
    }

    const boardList = (
        <Card.Group>
            { cards() }
        </Card.Group>
    )

    return (
        <div>
            { loading && loadingMessage }
            { boards.length === 0 && !loading  && !errors.global && emptyMessage }
            { errors.global && timeoutMessage }
            { boards.length > 0 && boardList }
        </div>
    )
}