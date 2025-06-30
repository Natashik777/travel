import {useState} from "react";
import axios from 'axios';

export default function AdminForm(){
    const [title, setTitle] = useState('')
    const [ content, setContent] = useState ('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/articles', {title, content});
            setTitle ('')
            setContent('');
            alert('Статья добавлена!');
        } catch (err) {
            alert('Ошибка при добавлении статьи')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
         <h2>Добавить статью</h2>
         <input 
         type="text"
         placeholder="Заголовок" 
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         required/>
         <textarea 
         placeholder="Контент"
         value={content}
         onChange={(e)=> setContent(e.target.value)}
         required
         ></textarea>
         <button type="submit">Добавить статью</button>
        </form>
    )
}