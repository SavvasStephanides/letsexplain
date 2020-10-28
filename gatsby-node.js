const fs = require("fs")
const YAML = require('yaml')

exports.sourceNodes = async({ actions, createNodeId, createContentDigest })=>{
    var articleFiles = fs.readdirSync("./src/articles")

    articleFiles.forEach((file)=>{
        const content = fs.readFileSync(`./src/articles/${file}`, 'utf8')
        var yaml = YAML.parse(content)
        
        var html = getArticleHtmlFromYaml(yaml)

        const node = {
            id: createNodeId(`ArticleFile-${file}`),
            slug: file.replace(".yml", ""),
            shortTitle: yaml.meta.shortTitle,
            title: yaml.meta.title,
            html: html,
            internal: {
                type: "ArticleFile",
                contentDigest: createContentDigest(file),
            },
        }
        actions.createNode(node)
    })
}

exports.createPages = async({actions, graphql}) => {
    const {data} = await graphql(`query {
        allArticleFile {
            nodes {
                slug
                title
                shortTitle
                html
            }
        }
        }
    `)

    data.allArticleFile.nodes.forEach((article) => {
        actions.createPage({
            path: `/${article.slug}`,
            component: require.resolve(`./src/templates/article.js`),
            context: {slug: article.slug}
        })
    })

    
}

function getArticleHtmlFromYaml(yaml){
    var html = "<article>"
    html += `<h1 class="article-block">${yaml.meta.title}</h1>`
    yaml.blocks.forEach((block) => {
        if(block.type === "text"){
            var content = block.content

            if(Array.isArray(content)){
                content = content.join("<br/>")
            }
            html += `<div class="article-block">${content}</div>`
        }

        else if(block.type === "image")
            html += `<figure class="article-block"><img src="${block.src}" alt="${block.alt}"/><figcaption>${block.caption}</figcaption></figure>`

        else if(block.type === "code"){
            var codeBlock = fs.readFileSync("./src/code-blocks/" + block.src, "utf-8")
            html += `<pre class="article-block"><code>${codeBlock}</code></pre>`
        }

        else if(block.type === "link"){
            var linkedArticleFile = fs.readFileSync(`./src/articles/${block.slug}.yml`, 'utf8')
            var linkedArticle = YAML.parse(linkedArticleFile)

            html += `<div class="article-block">
                <div>${block.caption}</div>
                <a href="${block.slug}" class="article-link">${linkedArticle.meta.title}</a>
            </div>`
        }
            
    })
    html += "</article>"

    return html
}