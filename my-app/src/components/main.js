import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Imagedata';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            photo:Data,

        };
    }
    render(){
        return(
            <CardColumns>                
         {
             this.props.Data.map(item => {

            
               return(
                   <HornedBeasts 
                   title={item.title} image_url={item.image_url}
                   description={item.description}
                   show={this.props.show} />


               ); 
            } )

         }
  
 </CardColumns>
    );
  }
}

export default Main;