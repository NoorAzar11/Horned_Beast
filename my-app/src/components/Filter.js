import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Filter extends React.Component{
    render(){
     

             return (
            <div>
                <Card style={{ width: '22rem', color: "#AD33FF", border: '3px solid #4C0080', borderRadius: '3 rem', textAlign: 'center', display: 'inline-block', margin: '.0.3rem' }} >
                <Card.Img onClick={this.props.popMsge} style={{ width: '19rem', height: '18rem' }} variant="top" src={this.props.filterForm.image_url} />
                <Card.Body >
                    <Card.Title >{this.props.filterForm.title}</Card.Title>
                    <Card.Text>
                        {this.props.filterForm.description}
                    </Card.Text>
                    <Card.Text> ❤🦄😹
                        {this.props.countVote}
                    </Card.Text>
                    <Button onClick={this.props.voteCounter} variant="primary">Vote Your Fav</Button>
                </Card.Body>
            </Card >
                </div>
        );
  
    
    };
}

export default Filter;