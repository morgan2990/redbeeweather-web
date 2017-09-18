import React, {Component} from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';


const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = {
            message: 'You need to provide a Board Name'
        }
    }
    return errors
};

class BoardForm extends Component {

    componentWillReceiveProps = (nextProps) => {
        const { board } = nextProps;
        if(board.id !== this.props.board.id) {
            this.props.initialize(board)
        }
        console.log(this.props);
    }
    renderField = ({input, label, type, meta: {touched, error}}) => (
        <Form.Field className={classnames({error: touched && error})}><label>{label}</label><input {...input}
                                                                                                   placeholder={label}
                                                                                                   type={type}/>
            {touched && error &&
            <span className="error">{error.message}</span>}
        </Form.Field>)

    render() {
        const { handleSubmit, pristine, submitting, loading } = this.props;
        return (
            <Grid centered columns ={2}>
                <Grid.Column>
                    <h1 style={{marginTop:"1em"}}>Add New Board</h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Form.Group widths='equal'>
                            {console.log(this.props.board.name)}
                            <Field name="name" type="text" component={this.renderField} label="Board Name"/>
                        </Form.Group>
                        <Button primary type="submit" disabled={pristine||submitting}>Save</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        )

    }
}

export default reduxForm({form:'board'})(BoardForm);