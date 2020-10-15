import React from "react"
import Layout from "../layout/general"
import ArticleList from "../components/ArticleList"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import "../styles/article-list.scss"

export default function Home({data}) {
    var articles = data.allArticleFile.nodes.map((article) => { return {slug: article.slug, name: article.shortTitle}})
  return <Layout>
    <Helmet>
      <title>Let's explain!</title>
    </Helmet>
    <div id="home-container">
          <ArticleList title="Dev, explained." articles={articles}/>
    </div>
  </Layout>
}

export const query = graphql`
query {
    allArticleFile {
      nodes {
        shortTitle
        slug
      }
    }
  }
  
`