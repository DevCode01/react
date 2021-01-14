import React from 'react'
import '../App.css';
import Contacts from './addArticle'
import Menus from './menus'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: ["Home", "About", "Blogs"]
    }
  }

  componentWillMount() {
    console.log("Component will mount")

  }

  componentDidMount() {
    console.log("Component did mount")
  }

  render() {
    return (
      <div>
        <head className="App-header">
          <Menus menus={this.state.menus} />
        </head>
        <br></br><br></br><br></br>
        <body>
          <Contacts contacts={this.state.contacts} />
        </body>
        <footer>&copy; Copyright 2021, Example Corporation</footer>
      </div>
    );
  }
}

export default App;
