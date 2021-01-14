import React from 'react'
import '../App.css';
import * as fromUserAPI from '../api/articles'
import { BrowserRouter, Link } from "react-router-dom"



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    async postArticle() {
        const article = await fromUserAPI.postArticle({ nomArticle: this.state.nomArticle, descriptionArticle: this.state.descriptionArticle, dateArticle: this.state.dateArticle, typeArticle: this.state.typeArticle })
        const articles = await fromUserAPI.getArticles()
        this.setState({
            articles: articles
        })

        localStorage.setItem('articles', articles)
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
            <div >
                <h1 class="titrePrincipal">Les articles à la une</h1>
                <br></br>
                <br></br>
                <div class="row">
                    {this.state.articles.map((u, i) => {
                        if (u.typeArticle === "SPORT") return [<div class="card" style={{ width: 18 + 'rem' }}>
                            <div class="col-sm-14" >
                                <div class="card">
                                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                                    <img class="card-img-top" src="https://www.humanite.fr/sites/default/files/images/63714.HR.jpg"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{u.nomArticle}</h5>
                                        <p class="card-text">{u.descriptionArticle}</p>
                                            <Link class="btn btn-primary" to="/page2">Voir la catégorie correspondante</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ]
                    })
                    }
                </div>
                <br></br>
                <br></br>
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
                                        <Link class="btn btn-primary" to="/page3">Voir la catégorie correspondante</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ]
                    })
                    }
                </div>
            </div>

        )
    }

}

export default Home;
