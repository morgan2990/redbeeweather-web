import React, { Component} from 'react';
import { connect } from 'react-redux';
import BoardDetails from '../../components/board/BoardDetails';
import { fetchBoard, deleteBoard } from '../../actions/board/board-actions';

class BoardDetailsPage extends Component {

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params._boardId);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Board Details</h1>
                <BoardDetails board={this.props.board} loading={this.props.loading} errors={this.props.errors} deleteBoard={this.props.deleteBoard}/>
            </div>
        )
    }
}

// Make boards  array available in  props
function mapStateToProps(state) {
    return {
        board : state.boardStore.board,
        loading: state.boardStore.loading,
        errors: state.boardStore.errors
    }
}

export default connect(mapStateToProps, {fetchBoard, deleteBoard})(BoardDetailsPage);