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
      hornsNum: 0,
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
  
  fillData=(val)=>{
    console.log(val.target.value);
    let data3=(val.target.value);
    let fillHB =Data.filter(item => {
      
    if (item.horns == data3) {
      return item
    } else if (data3 == 0)

      return item
  });
  console.log(fillHB);
  this.setState({
    photo: fillHB
  })
}


render() {
  return (

    <div className='container'>
      <Header />
      <AddedForm added={this.fillData} />
      {/* <Filter filterForm={this.state.filterForm}/> */}
      <Main photo={this.state.photo} show={this.show}  />
      <SelectedBeast showing={this.state.showing} data2={this.state.data2} close={this.close} />
      <Footer />
    </div>
  );
}
}
export default App;









