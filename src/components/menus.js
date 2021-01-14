import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

class Menus extends React.Component {

  constructor(props) {
    super(props)
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
        <ul>
          <li><Link className="monMenu" to="/">Home</Link></li>
          <li><Link className="monMenu" to="/page2">Sport</Link></li>
          <li><Link className="monMenu" to="/page3">Économie</Link></li>
          <li><Link className="monMenu" to="/page4">Ajouter un article</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menus;
