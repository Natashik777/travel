import React from 'react';
import { DiVim } from 'react-icons/di';
import AdminForm from '../components/AdminForm';
import ArticleList from '../components/ArticleList';
import ArticlesPage from '../components/ArticlesPage';


export default function CreateArticles() {
  return 
  <div>
    <AdminForm/>
    <ArticlesPage/>
    
    <hr/>
    <ArticleList/>
  </div>
}