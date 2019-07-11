import React from 'react';
import './App.css';
import Header from "./header";
import MainContent from "./main";
import Footer from "./footer";
import products from "./prod";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      check: []
    }
    this.handle = this.handle.bind(this)
    this.rem = this.rem.bind(this)
  }

  //remove specific element from array
  rem(newarr, name){
    for (var i=newarr.length-1; i>=0; i--) {
      if (newarr[i] === name) {
          newarr.splice(i, 1);
          break;
        }
    }
  }

  //handles changes to checkboxes and text inputs
  handle(event){
    const {name, value, type, checked} = event.target
    let newarr = this.state.check.slice()
    checked ? newarr.push(name) : this.rem(newarr, name)
    type === "checkbox" ? this.setState({check: newarr}) : this.setState({
      [name]: value
    })
  }


  render(){
    const productComponents = products.map(item => <MainContent id={item.id} text={item.text} description={item.description} onChange={this.handle}/> )
    return (
      <div>
        <Header />
          <div className="mid">
            <form className="myform">
                {productComponents}
              <input type="text" name="firstName" value={this.state.firstName} onChange={this.handle} placeholder="First Name" /><br />
              <input type="text" name="lastName" value={this.state.lastName} onChange={this.handle} placeholder="Last Name" />
              <h1>{this.state.firstName} {this.state.lastName}</h1>
              <h3>{this.state.check.length > 0 ? <u>Selected</u> : null}</h3>
              <h3>{this.state.check.length > 0 ? JSON.stringify(this.state.check) : null}</h3>
              <button>Submit</button>
            </form>
          </div>
        <Footer />

      </div>
    )

  }
}

export default App;
