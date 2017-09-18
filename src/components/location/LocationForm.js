import React, {Component} from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';


const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = {
            message: 'You need to provide a Location Name'
        }
    }
    if (!values.woeId) {
        errors.woeId = {
                message: 'You need to provide a valid Woe Id'
        }
        }
    return errors
};

class LocationForm extends Component {
    renderField = ({input, label, type, meta: {touched, error}}) => (
        <Form.Field className={classnames({error: touched && error})}><label>{label}</label><input {...input}
                                                                                                   placeholder={label}
                                                                                                   type={type}/>
            {touched && error &&
            <span className="error">{error.message}</span>}
        </Form.Field>)


        componentWillReceiveProps = (nextProps) => {
        const { location } = nextProps;
        if(location.locationId !== this.props.location.locationId) {
        this.props.initialize(location)
        }
        }
    render() {
        const { handleSubmit, pristine, submitting, loading } = this.props;
        return (
            <Grid centered columns ={2}>
                <Grid.Column>
                    <h1 style={{marginTop:"1em"}}>Add New Location</h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="name" type="text" component={this.renderField} label="Location Name"/>
                        <Field name="woeId" type="text" component={this.renderField} label="Woe Id"/>
                        <Button primary type="submit" disabled={pristine||submitting}>Save</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        )

    }
}

export default reduxForm({form:'location'})(LocationForm);