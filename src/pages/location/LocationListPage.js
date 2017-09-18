import React, { Component} from 'react';
import { connect } from 'react-redux';
import LocationList from '../../components/location/LocationList';
import { fetchLocations, deleteLocation } from '../../actions/location/location-actions';

class LocationListPage extends Component {

    componentDidMount() {
        this.props.fetchLocations();
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>List of Locations</h1>
                <LocationList locations={this.props.locationList} inBoard={false} loading={this.props.loading} errors={this.props.errors} deleteLocation={this.props.deleteLocation}/>
            </div>
        )
    }
}

// Make locations  array available in  props
function mapStateToProps(state) {
    return {
        locationList : state.locationStore.locationList,
        loading: state.locationStore.loading,
        errors: state.locationStore.errors
    }
}

export default connect(mapStateToProps, {fetchLocations, deleteLocation})(LocationListPage);