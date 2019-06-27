import React from 'react';
import logo from './logo.svg';
import Ninja from './components/Ninja';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        {id: 1, name: 'Ruy', age: 30, belt: 'Black'},
        {id: 2, name: 'Yoshi', age: 20, belt: 'Green'},
        {id: 3, name: 'Crystal', age: 25, belt: 'Pink'}
      ]
    }
  }

  handleClick = (e) =>{
    // console.log(e.target);
    console.log(this.state);
    this.setState({name: 'Yoshi'});
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleMouseOver = (e) => {
    console.log(e.target, e.pageX);
  }

  handleCopy = (e) =>  {
    console.log('Try being original for once!');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submited by', this.state.name);
  }

  render(){
    return (
      <div className="App">
        <h1>Hei, Ninjas</h1>
        <p>My Name is: {this.state.name} and I am {this.state.age}</p>
        <button onClick={this.handleClick}>Click me</button>  
        <button onMouseOver={this.handleMouseOver}>Hover me</button>
        <p onCopy={this.handleCopy}>What we think, we become</p>

        <form onSubmit={this.handleSubmit}>
          <div className={'field'}>
            <input name="name" 
                   value={this.state.name} 
                   type='text' 
                   onChange={this.handleChange} />
            <button>Submit</button>
          </div>
        </form>

        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
