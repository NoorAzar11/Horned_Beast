import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countVote: 0
        };
    }
    voteCounter = () => {
        this.setState({
            countVote: this.state.countVote + 1
        });
    }
    popMsge = () => {
        this.props.show(this.props.title);
        console.log("111");
        this.setState({
            countVote: this.state.countVote + 1
        }); console.log("222");
    }
    render() {
        return (
            <Card style={{ width: '22rem', color: "#AD33FF", border: '3px solid #4C0080', borderRadius: '3 rem', textAlign: 'center', display: 'inline-block', margin: '.0.3rem' }} >
                <Card.Img onClick={this.popMsge} style={{ width: '19rem', height: '18rem' }} variant="top" src={this.props.image_url} />
                <Card.Body >
                    <Card.Title >{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text> ❤🦄😹
                        {this.state.countVote}
                    </Card.Text>
                    <Button onClick={this.voteCounter} variant="primary">Vote Your Fav</Button>
                </Card.Body>
            </Card >
        );
    }
}
export default HornedBeasts;