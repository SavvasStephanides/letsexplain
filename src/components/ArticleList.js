import React from "react"

export default function ArticleList({title, articles}){
    return <div className="article-list">
    <h1>{title}</h1>
    <ul>
    {
        articles.map((article) =>
            <li className="article" key={article.slug}><a href={"/" + article.slug}>{article.name}</a></li>
        )
    }
    </ul>
</div>
}