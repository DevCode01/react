import React from 'react'
import '../App.css';
import Menus from './menus'
import * as fromUserAPI from '../api/articles'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
  async deleteArticle() {
    const article = await fromUserAPI.deleteArticle({ _id: this.state._id })
    const articles = await fromUserAPI.getArticles()
    this.setState({
      articles: articles
    })
  }

  async componentDidMount() {
    const articles = await fromUserAPI.getArticles()
    this.setState({
      articles: articles
    })
  }

  handleChange(e) {
    e.preventDefault()
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => console.log("callback", this.state))
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <head className="App-header">
          <Menus menus={this.state.menus} />
        </head>
        <br></br>
        <br></br>
        <h1 class="titrePrincipal">La catégorie économie</h1>
        <br></br>
        <br></br>
        <div class="row">
          {this.state.articles.map((u, i) => {
            if (u.typeArticle === "ECONOMIE") return [<div class="card" style={{ width: 18 + 'rem' }}>
              <div class="col-sm-14">
                <div class="card">
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                  <img class="card-img-top" src="https://d2514mmmgz66x9.cloudfront.net/media/courses-thumbnails/course-v1phenix184001session01.730x412_q85_crop-scale.jpg"></img>
                  <div class="card-body">
                    <h5 class="card-title">{u.nomArticle}</h5>
                    <p class="card-text">{u.descriptionArticle}</p>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"></li>
                      <li class="list-group-item">{u._id}</li>
                      <input placeholder="ID de l'article pour delete" class="list-group-item" type="text" name="_id" onChange={(e) => this.handleChange(e)} />
                    </ul>

                    <p></p>
                    <form class="formButtonDelete">
                      <button class="btn btn-primary" name="idArticle" onClick={() => this.deleteArticle()}>Recopier l'id de l'objet dans le champ et cliquer ici : </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            ]
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
