import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Data from './components/Imagedata';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

  constructor(props) {
   super (props);
    this.state = {
      Data:Data,
      photo: Data,
      showing: false,
      data2: {}
    };
  }
  show = (title) => {
    const selectedbeast2 = Data.find(animal =>animal.title == title) 
    this.setState({
      showing: true,
      data2: selectedbeast2
    }); 
  }
  close = () => {
    this.setState({
      showing: false,
      // data2: {}
    });


  }
  render() {
    return (
      <div className='container'>
      <Header />

      
       <Main photo={this.state.photo} show={this.show} Data={this.state.Data} />
       <SelectedBeast showing={this.state.showing} data2={this.state.data2} close={this.close} />
         <Footer /> 
         
      </div>
    );
  }
}
export default App;