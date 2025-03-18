import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
const Post = () => {
    const [Posts, setPosts] = useState([]);
    const api = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="d-flex flex-wrap">
         
                {
                    Posts.map((data) => (
                        <div className="mx-4 my-4 card" key={data.id}>
                            <h1>{data.id}</h1>
                            <div className="card" style={{ width:"400px",height:"300px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">{data.body}</p>
                                    {/* <a href="#" className="btn btn-primary">View</a> */}
                                    
                                  
                                    <NavLink to={`/Post/show/${data.id}`} >Show Post</NavLink>
                                    
                           
                           
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
     
    );
}
export default Post




