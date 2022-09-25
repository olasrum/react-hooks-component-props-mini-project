import React from "react";
import Article from "./Article";

function ArticleList({blogPosts}) {

    const article = blogPosts.map((blogPost) => {
        return <Article 
        key={blogPost.id} 
        title={blogPost.title}
        date={blogPost.date}
        preview={blogPost.preview}
        minutes={blogPost.minutes}
        />
    })

    return (
        <main>
            {article}
        </main>
    )

}

export default ArticleList;