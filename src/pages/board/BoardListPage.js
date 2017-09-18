import React, { Component} from 'react';
import { connect } from 'react-redux';
import BoardList from '../../components/board/BoardList';
import {deleteBoard, fetchBoards} from '../../actions/board/board-actions';

class BoardListPage extends Component {

    componentDidMount() {
        this.props.fetchBoards();
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>List of Boards</h1>
                <BoardList boards={this.props.boardList} loading={this.props.loading} errors={this.props.errors} deleteBoard={this.props.deleteBoard}/>
            </div>
        )
    }
}

// Make boards  array available in  props
function mapStateToProps(state) {
    return {
        boardList : state.boardStore.boardList,
        loading: state.boardStore.loading,
        errors: state.boardStore.errors
    }
}

export default connect(mapStateToProps, {fetchBoards, deleteBoard})(BoardListPage);