import React from 'react';
import NavBar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ArticleList from '../../Components/Learn/Articles/ArticleList';

const LearnArticleListPage = () => {
  
  return (
     <div>
      <NavBar />
      <ArticleList />
      <Footer />
    </div>
  );
};
export default LearnArticleListPage;