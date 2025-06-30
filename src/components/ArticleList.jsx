import { useEffect, useState } from "react";
import axios from "axios";

export default function ArticleList(){
    const [articles, setArticles] = useState([]);

    useEffect( ()=>{
        axios.get('http://localhost:5000/api/articles')
        .then(res=> setArticles(res.data))
        .catch(err => console.error (err));

    }, []);

    return (
        <div>
            <h2>Список статтей</h2>
            {articles.map((article)=>(
                <div key ={article._id} style={{marginBottom: '1rem'}}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                    <small>{new Date(article.date).toLocaleString()}</small>
                    </div>
            ))}
        </div>
    )
} 