import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Data from './Imagedata.json';

class AddedForm extends Component {
    // update = horns => this.props.updateResult(horns);

    

    render() {
        
        return (
            <div>
                <Form >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label> Numbers of Horn</Form.Label>
                        <Form.Control as="select" onChange={this.props.added} name="horns">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                            <option value='0'>rest</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
export default AddedForm;