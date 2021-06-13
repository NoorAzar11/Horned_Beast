import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component{
    render(){
        return(
            <div>
                <Modal show={this.props.showing} onHide={this.props.close}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.props.data2.title} </Modal.Title>
                    
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img variant="top" style={{width: '14rem'}}
                        src={this.props.data2.image_url} 
                        />
                        <p>{this.props.data2.description} </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.close}> close </Button>
                        </Modal.Footer>
                        </Modal>
            </div>
        );
    }
}
 export default SelectedBeast;


