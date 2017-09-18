import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {NavLink} from 'react-router-dom';




class DrawerLeftMenu extends Component {

    constructor(props) {
        super(props);
        this.state


    }


    render() {
        return (


                    <Drawer
                        docked={false}
                        width={200}
                        open={this.props.open}
                        onRequestChange={this.props.onRequestChange}
                    >
                            <NavLink exact to="/"><MenuItem onClick={this.props.onRequestChange}>Home</MenuItem></NavLink>
                        <Divider/>
                            <NavLink exact to="/board/list"><MenuItem onClick={this.props.onRequestChange}>View All Available Boards</MenuItem></NavLink>
                            <NavLink exact to="/board/new"><MenuItem onClick={this.props.onRequestChange}>Create
                                Board</MenuItem></NavLink>
                            <Divider/>
                        <NavLink exact to="/location/list"><MenuItem onClick={this.props.onRequestChange}>View All Available Locations</MenuItem></NavLink>
                            <NavLink exact to="/location/new"><MenuItem onClick={this.props.onRequestChange}>Create
                                Location</MenuItem></NavLink>


                            <Divider/>


                    </Drawer>


        );
    }
}

export default DrawerLeftMenu;