export default function ArticleService(){

    return {
        getArticleHtmlFromYaml
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
}