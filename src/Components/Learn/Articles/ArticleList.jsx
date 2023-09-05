import React, { useEffect, useState } from 'react';
import { articles } from './articles'
import { Link } from 'react-router-dom';



const ArticleList = () => {

  return (
    <main>
      <section>
        <div className="container pt-14 pb-9 pb-lg-12">
          <div className="row pt-lg-7">
            <div className="col-md-10 col-lg-8">
              <h1 className="mb-0 display-4">Insights, thoughts & announcements from us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative bg-white">
        <div className="container z-index-1 position-relative pb-9 pb-lg-11">
          {articles.map(article => (
            <article
              key={article.id}
              className="row g-0 mb-4 mb-lg-5 position-relative overflow-hidden hover-lift hover-shadow-lg border rounded-5 card-hover shadow-sm align-items-center">
              <div className="col-md-6 col-lg-5 p-0 p-lg-0">
                <div className="overflow-hidden">
                  <img src={article.articleImg} alt="" className="img-fluid img-zoom" />
                </div>
              </div>
              <div className="col-md-6 col-lg-7">
                <div className="position-relative p-4 p-lg-5">
                  <div className="d-flex justify-content-start w-100 pb-3 align-items-center">
                    {article.tags.map(tag => (<a href="#!" key={tag} className="badge bg-primary rounded-pill me-3">{tag}</a>))}

                  </div>
                  <div>
                    <h2 className="mb-4">
                      {article.title}
                    </h2>
                    <div className="d-flex mb-0 align-items-center pt-4">
                      <div className="position-relative me-2">
                        <img className="position-relative avatar sm rounded-circle"
                          src={article.authorImg} alt="" />
                      </div>
                      <span className="text-muted d-inline-block small">By <a href="#!"
                        className="text-dark">{article.author}</a></span>


                    </div>

                  </div>
                  <Link
                    to={`/learn/blog/${article.key}`} state={{ article }}
                    className='stretched-link'>Read More</Link>
                </div>
              </div>



            </article>
          ))}

        </div>
      </section>
    </main >
  );
};
export default ArticleList;