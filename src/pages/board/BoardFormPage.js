
import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newBoard, saveBoard, fetchBoard, updateBoard } from '../../actions/board/board-actions';
import BoardForm from '../../components/board/BoardForm';

class BoardFormPage extends Component {

    state = {
        redirect: false
    }

    componentDidMount = () => {
        const {_id}  = this.props.match.params;
        console.log(_id);
        console.log(this.props.match.params);
        if(_id){
            this.props.fetchBoard(_id)
        } else {
            this.props.newBoard();
        }
    }

    submit = (board) => {
        if(!board.id) {
            return this.props.saveBoard(board)
                .then(response => this.setState({ redirect:true }))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        } else {
            return this.props.updateBoard(board)
                .then(response => this.setState({ redirect:true }))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.redirect ?
                        <Redirect to="/" /> :
                        <BoardForm board={this.props.board} loading={this.props.loading} onSubmit={this.submit} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        board: state.boardStore.board,
        errors: state.boardStore.errors
    }
}

export default connect(mapStateToProps, {newBoard, saveBoard, fetchBoard, updateBoard})(BoardFormPage);