import React from "react"
import Layout from "../layout/general"
import { graphql } from 'gatsby'
import "../styles/article.scss"
import { Helmet } from "react-helmet"

export default function ArticleTemplate({data}) {
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