import React from "react"
import Layout from "../layout/general"
import ArticleList from "../components/ArticleList"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import "../styles/index.scss"

export default function Home({data}) {
    var articles = data.allArticleFile.nodes.map((article) => { return {slug: article.slug, name: article.shortTitle}})
  return <Layout>
    <Helmet>
      <title>Let's explain!</title>
    </Helmet>
    <div id="home-container">
          <div className="container-width dev-intro">A project by <a href="https://savvasstephanides.github.io" target="_blank" rel="noreferrer">Savvas Stephanides</a></div>
          <h1>All threads</h1>
          <ArticleList title="All threads" articles={articles}/>
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