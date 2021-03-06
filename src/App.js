import React from 'react'
import './App.css';
import Home from './components/home'
import Menus from './components/menus'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    console.log("Component will mount")

  }

  componentDidMount() {
    console.log("Component did mount")
    this.setState({
      articles: localStorage.getItem('articles')
    })
  }

  render() {
    return (
      <div>
       <head className="App-header">
          <Menus menus={this.state.menus} />
        </head>
        <br></br><br></br><br></br>
        <body>
          <Home home={this.props.home} />
        </body>
      </div>
    );
  }
}

export default App;
