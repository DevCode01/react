import React from 'react'
import '../App.css';
import * as fromUserAPI from '../api/articles'


class addArticle extends React.Component {
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
            <div class="alignerLeBloc">
                <p>Nom de l'article:</p>
                <input id="nom" type="text" required name="nomArticle" value={this.state.nomArticle} onChange={(e) => this.handleChange(e)} />
                <p for="msg">Description :</p>
                <textarea name="descriptionArticle" required  value={this.state.descriptionArticle} onChange={(e) => this.handleChange(e)}></textarea>
                <p>Date de publication :</p>
                <input type="text" name="dateArticle" required  value={this.state.dateArticle} onChange={(e) => this.handleChange(e)} />
                <p>Catégorie :</p>
                <input type="text" name="typeArticle" required  value={this.state.typeArticle} onChange={(e) => this.handleChange(e)} />
                <p></p><button onClick={() => this.postArticle()}>Publier l'article</button>
            </div>



        )
    }
}

export default addArticle;