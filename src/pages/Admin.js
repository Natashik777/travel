import React from 'react';
import { DiVim } from 'react-icons/di';
import AdminForm from '../components/AdminForm';
import ArticleList from '../components/ArticleList';


export default function Admin() {
  return 
  <div>
    <AdminForm/>
    
    <hr/>
    <ArticleList/>
  </div>
}