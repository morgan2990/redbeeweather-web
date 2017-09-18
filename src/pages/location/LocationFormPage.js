
import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newLocation, saveLocation, fetchLocation, updateLocation } from '../../actions/location/location-actions';
import LocationForm from '../../components/location/LocationForm';

class LocationFormPage extends Component {

    state = {
        redirect: false
    }

    componentDidMount = () => {
        const { _id } = this.props.match.params;
        if(_id){
            this.props.fetchLocation(_id)
        } else {
            this.props.newLocation();
        }
    }

    submit = (location) => {
        if(!location._id) {
            return this.props.saveLocation(location)
                .then(response => this.setState({ redirect:true }))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        } else {
            return this.props.updateLocation(location)
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
                        <LocationForm location={this.props.location} loading={this.props.loading} onSubmit={this.submit} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        location: state.locationStore.location,
        errors: state.locationStore.errors
    }
}

export default connect(mapStateToProps, {newLocation, saveLocation, fetchLocation, updateLocation})(LocationFormPage);