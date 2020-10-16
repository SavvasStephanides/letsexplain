import React from "react"
import "../styles/article-list.scss"

export default function ArticleList({articles}){
    return <div className="article-list">
    <ul>
    {
        articles.map((article) =>
            <li className="article" key={article.slug}><a href={"/" + article.slug}>{article.name}</a></li>
        )
    }
    </ul>
</div>
}