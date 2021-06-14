import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Data from './components/Imagedata';
import SelectedBeast from './components/SelectedBeast';
import AddedForm from './components/Form';
// import Filter from './components/Filter';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: Data,
      photo: Data,
      showing: false,
      data2: {},
      filterForm: Data,
      numbersH: '',
      hornsNum:0,
    };
  }
  show = (title) => {
    const selectedbeast2 = Data.find(animal => animal.title === title)
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

  filData = (event) => {
    event.preventDefault();
    let data3 = Data;
    let option = Number(event.target.value);

    this.setState({
      hornsNum : option,
    })
    console.log(option);
    console.log(this.state.hornsNum);
    if (option >= 1) {

      data3 = Data.filter(element => {
        return (Number(element.horns) === option);
      });

      this.props.mystate(data3);
      console.log(data3);


    } else {
      this.props.mystate(Data);

    }

  }

  // formModal = (event) => {

  //   this.setState({
  //    filterForm:event

  //   })

  //  }

  // result = (event) => { //to filter the options
  //   event.preventDefault(event);
  //   if (this.state.numbersH !== 'rest') {
  //     this.setState({
  //       photo: Data.filter(animal => animal.horns === Number(this.state.numbersH))
  //     });
  //   }
  //   else {
  //     this.setState({
  //       photo: Data.filter(animal => animal.horns > 0)
  //     });
  //   }
  // }
  // updateResult = horns => this.setState({ numbersH: horns.target.value }); //to update data
  render() {
    return (

      <div className='container'>
        <Header />
        <AddedForm added={this.filData} />
        {/* <Filter filterForm={this.state.filterForm}/> */}
        <Main photo={this.state.photo} show={this.show} Data={this.state.Data} />
        <SelectedBeast showing={this.state.showing} data2={this.state.data2} close={this.close} />
        <Footer />
      </div>
    );
  }
}
export default App;