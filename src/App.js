import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AppBarDrawer from './components/AppBarDrawer';
import {MuiThemeProvider} from 'material-ui';
import LocationListPage from './pages/location/LocationListPage';
import LocationFormPage from './pages/location/LocationFormPage';
import BoardListPage from './pages/board/BoardListPage';
import BoardFormPage from './pages/board/BoardFormPage';
import BoardDetailsPage from "./pages/board/BoardDetailsPage";

class App extends Component {
    render() {
        return (
            <div className="App">

                <MuiThemeProvider>

                    <div>
                        <div>
                            <AppBarDrawer/>

                        </div>
                        <Route exact path= "/" component = {HomePage}/>
                        <Route exact path="/location/new" component={LocationFormPage}/>
                        <Route exact path="/board/new" component={BoardFormPage}/>
                        <Route exact path="/board/list" component={BoardListPage}/>
                        <Route exact path="/location/list" component={LocationListPage}/>
                        <Route path="/board/details/:_boardId" component={BoardDetailsPage}/>
                        <Route path="/board/edit/:_boardId" component={BoardFormPage}/>
                        <Route path="/location/edit/:_locationId" component={LocationFormPage}/>

                    </div>
                </MuiThemeProvider>

            </div>

        );
    }
}

export default App;
