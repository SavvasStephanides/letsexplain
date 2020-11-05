import React, {useEffect} from "react"
import Layout from "../layout/general"
import { graphql } from 'gatsby'
import "../styles/article.scss"
import { Helmet } from "react-helmet"
import "../styles/code-light.css"

const hljs = require("highlight.js")

export default function ArticleTemplate({data}) {

    useEffect(() => {
      let codeBlocks = document.querySelectorAll("pre code")
      codeBlocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    })

    return <Layout>
        <Helmet>
          <title>{data.articleFile.title}</title>
        </Helmet>
        <section dangerouslySetInnerHTML={{__html: data.articleFile.html}}></section>
    </Layout>
}

export const query = graphql`
query ($slug: String!) {
    articleFile(slug: {eq: $slug}) {
      html
      title
    }
  }
  
`