import React,{useState, useEffect} from 'react'
import {
    Link
  } from "react-router-dom";
import axios from 'axios';

const ListDetail = ({match}) => {
    const id = match.params.id
    let [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPosts = async() => {
          setLoading(true);
          const res = await axios.get(`http://localhost:3000/shipments/${id}`);
          setPosts(res.data);
          setLoading(false);
         }
        getPosts();
    }, [id]);
    return (
        <div>
            <Link to="/">Back</Link>
            {
                loading === false ?
                <>
                    <h1>{posts.name}</h1>
                    <h3>{posts.mode}</h3>
                    <h4>{posts.destination}</h4>
                    <h4>{posts.origin}</h4>
                    <h4>{posts.status}</h4>
                </>
                :
                null
            }
           
        </div>
    )
}

export default ListDetail
