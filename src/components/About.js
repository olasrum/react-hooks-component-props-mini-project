import React from "react";

function About({blogImage ="https://via.placeholder.com/215", blogAlt, blogAbout}){
    return (
        <aside>
            <img src={blogImage} alt={blogAlt}></img>
            <p>{blogAbout}</p>
        </aside>
    )

}

export default About;