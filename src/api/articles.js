export const getArticles = async () => {
    const response = await fetch('http://localhost:3001/articles/', {
        method: 'GET',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    const articles = await response.json()
    return articles
}

export const postArticle = async (article) => {
    const response = await fetch('http://localhost:3001/articles/', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(article)
    })

    const articles = await response.json()
    return articles
}


export const deleteArticle = async (article) => {
    const response = await fetch('http://localhost:3001/articles/' + Object.values(article), {
        method: 'DELETE',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(article)
    })
}