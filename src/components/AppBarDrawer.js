import React, {Component} from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DrawerLeftMenu from './DrawerLeftMenu'


class AppBarDrawer extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }

        this.toggleDrawer = this.toggleDrawer.bind(this)
        this.changeRenderedView = this.changeRenderedView.bind(this)
    }

    toggleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    changeRenderedView() {
        this.toggleDrawer()
    }


    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Weather App"
                            onLeftIconButtonTouchTap={() => this.toggleDrawer()}
                        />
                        <DrawerLeftMenu open={this.state.open} onToggleDrawer={this.toggleDrawer}
                                        onRequestChange={this.changeRenderedView}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default AppBarDrawer;