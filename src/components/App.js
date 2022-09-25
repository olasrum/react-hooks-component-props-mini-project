import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"


console.log(blogData);

function App() {

  return (
    <div className="App">
      <Header blogTitle={blogData.name}/>
      <About blogImage={blogData.image} blogAlt="blog logo" blogAbout="A blog about learning React" />
      <ArticleList blogPosts={blogData.posts}/>
    </div>
  );
}

export default App;
